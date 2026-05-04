
import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'panini-2026-final-vercel-v1';

const TEAMS = [
  {
    "code": "ARG",
    "name": "Argentina"
  },
  {
    "code": "AUS",
    "name": "Australia"
  },
  {
    "code": "AUT",
    "name": "Austria"
  },
  {
    "code": "BEL",
    "name": "Bélgica"
  },
  {
    "code": "BRA",
    "name": "Brasil"
  },
  {
    "code": "CAN",
    "name": "Canadá"
  },
  {
    "code": "CPV",
    "name": "Cabo Verde"
  },
  {
    "code": "COL",
    "name": "Colombia"
  },
  {
    "code": "CRC",
    "name": "Costa Rica"
  },
  {
    "code": "CRO",
    "name": "Croacia"
  },
  {
    "code": "DEN",
    "name": "Dinamarca"
  },
  {
    "code": "ECU",
    "name": "Ecuador"
  },
  {
    "code": "EGY",
    "name": "Egipto"
  },
  {
    "code": "ENG",
    "name": "Inglaterra"
  },
  {
    "code": "FRA",
    "name": "Francia"
  },
  {
    "code": "GER",
    "name": "Alemania"
  },
  {
    "code": "GHA",
    "name": "Ghana"
  },
  {
    "code": "IRN",
    "name": "Irán"
  },
  {
    "code": "JPN",
    "name": "Japón"
  },
  {
    "code": "KOR",
    "name": "Corea del Sur"
  },
  {
    "code": "KSA",
    "name": "Arabia Saudita"
  },
  {
    "code": "MAR",
    "name": "Marruecos"
  },
  {
    "code": "MEX",
    "name": "México"
  },
  {
    "code": "NED",
    "name": "Países Bajos"
  },
  {
    "code": "NZL",
    "name": "Nueva Zelanda"
  },
  {
    "code": "NOR",
    "name": "Noruega"
  },
  {
    "code": "PAN",
    "name": "Panamá"
  },
  {
    "code": "PAR",
    "name": "Paraguay"
  },
  {
    "code": "POR",
    "name": "Portugal"
  },
  {
    "code": "QAT",
    "name": "Qatar"
  },
  {
    "code": "SCO",
    "name": "Escocia"
  },
  {
    "code": "SEN",
    "name": "Senegal"
  },
  {
    "code": "RSA",
    "name": "Sudáfrica"
  },
  {
    "code": "ESP",
    "name": "España"
  },
  {
    "code": "SUI",
    "name": "Suiza"
  },
  {
    "code": "TUN",
    "name": "Túnez"
  },
  {
    "code": "URU",
    "name": "Uruguay"
  },
  {
    "code": "USA",
    "name": "Estados Unidos"
  },
  {
    "code": "ALG",
    "name": "Argelia"
  },
  {
    "code": "CMR",
    "name": "Camerún"
  },
  {
    "code": "CIV",
    "name": "Costa de Marfil"
  },
  {
    "code": "JAM",
    "name": "Jamaica"
  },
  {
    "code": "NGA",
    "name": "Nigeria"
  },
  {
    "code": "UZB",
    "name": "Uzbekistán"
  },
  {
    "code": "JOR",
    "name": "Jordania"
  },
  {
    "code": "IRQ",
    "name": "Irak"
  },
  {
    "code": "UAE",
    "name": "Emiratos Árabes Unidos"
  },
  {
    "code": "BIH",
    "name": "Bosnia y Herzegovina"
  }
];

function createAlbum() {
  const especiales = {
    code: 'FWC',
    name: 'Especiales / Intro',
    stickers: Array.from({ length: 32 }, (_, index) => ({
      id: `FWC-${index + 1}`,
      code: `FWC-${index + 1}`,
      number: index + 1,
      player: index === 0 ? 'Logo oficial' : '',
      have: false,
      duplicates: 0
    }))
  };

  const countries = TEAMS.map(team => ({
    ...team,
    stickers: Array.from({ length: 20 }, (_, index) => ({
      id: `${team.code}-${index + 1}`,
      code: `${team.code} ${index + 1}`,
      number: index + 1,
      player: '',
      have: false,
      duplicates: 0
    }))
  }));

  return { countries: [especiales, ...countries], version: 1 };
}

function safeLoad() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return createAlbum();
    const parsed = JSON.parse(saved);
    if (!parsed || !Array.isArray(parsed.countries)) return createAlbum();
    return parsed;
  } catch {
    return createAlbum();
  }
}

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function App() {
  const [album, setAlbum] = useState(safeLoad);
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('all');
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('cards');
  const [importText, setImportText] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(album));
  }, [album]);

  const allStickers = useMemo(() => album.countries.flatMap(group =>
    group.stickers.map(sticker => ({ ...sticker, countryCode: group.code, countryName: group.name }))
  ), [album]);

  const stats = useMemo(() => {
    const total = allStickers.length;
    const have = allStickers.filter(sticker => sticker.have).length;
    const missing = total - have;
    const duplicates = allStickers.reduce((sum, sticker) => sum + Number(sticker.duplicates || 0), 0);
    return {
      total,
      have,
      missing,
      duplicates,
      percent: total ? Math.round((have / total) * 100) : 0
    };
  }, [allStickers]);

  const visibleCountries = useMemo(() => {
    const q = normalize(query.trim());

    return album.countries
      .filter(group => country === 'all' || group.code === country)
      .map(group => {
        const stickers = group.stickers.filter(sticker => {
          const text = normalize(`${group.name} ${group.code} ${sticker.code} ${sticker.player}`);
          const matchesSearch = !q || text.includes(q);
          const matchesFilter =
            filter === 'all' ||
            (filter === 'have' && sticker.have) ||
            (filter === 'missing' && !sticker.have) ||
            (filter === 'duplicates' && sticker.duplicates > 0) ||
            (filter === 'withPlayer' && sticker.player.trim()) ||
            (filter === 'withoutPlayer' && !sticker.player.trim());
          return matchesSearch && matchesFilter;
        });
        return { ...group, stickers };
      })
      .filter(group => group.stickers.length > 0);
  }, [album, query, country, filter]);

  function updateSticker(countryCode, stickerId, patch) {
    setAlbum(current => ({
      ...current,
      countries: current.countries.map(group => {
        if (group.code !== countryCode) return group;
        return {
          ...group,
          stickers: group.stickers.map(sticker =>
            sticker.id === stickerId ? { ...sticker, ...patch } : sticker
          )
        };
      })
    }));
  }

  function toggleSticker(countryCode, sticker) {
    updateSticker(countryCode, sticker.id, { have: !sticker.have });
  }

  function changeDuplicates(countryCode, sticker, value) {
    const next = Math.max(0, Number(sticker.duplicates || 0) + value);
    updateSticker(countryCode, sticker.id, {
      duplicates: next,
      have: sticker.have || next > 0
    });
  }

  function exportAlbum() {
    downloadFile('album-panini-mundial-2026.json', JSON.stringify(album, null, 2));
  }

  function importAlbum() {
    try {
      const parsed = JSON.parse(importText);
      if (!parsed || !Array.isArray(parsed.countries)) throw new Error('Formato inválido');
      setAlbum(parsed);
      setImportText('');
      setShowImport(false);
      setMessage('Colección importada correctamente.');
    } catch {
      setMessage('No se pudo importar el JSON. Revisá el formato.');
    }
  }

  function resetAlbum() {
    const ok = window.confirm('¿Querés reiniciar toda la colección?');
    if (!ok) return;
    setAlbum(createAlbum());
    setMessage('Colección reiniciada.');
  }

  async function copyList(type) {
    const rows = allStickers
      .filter(sticker => type === 'missing' ? !sticker.have : sticker.duplicates > 0)
      .map(sticker => type === 'missing'
        ? `${sticker.countryCode} ${sticker.number}${sticker.player ? ' - ' + sticker.player : ''}`
        : `${sticker.countryCode} ${sticker.number} x${sticker.duplicates}${sticker.player ? ' - ' + sticker.player : ''}`
      );

    const title = type === 'missing' ? 'Figuritas faltantes' : 'Figuritas repetidas';
    const text = `${title}\n${rows.length ? rows.join('\n') : 'No hay figuritas para mostrar.'}`;

    try {
      await navigator.clipboard.writeText(text);
      setMessage(`${title} copiadas.`);
    } catch {
      setMessage(text);
    }
  }

  return (
    <main className="app">
      <section className="hero">
        <div>
          <p className="eyebrow">Mundial 2026 · Álbum de figuritas</p>
          <h1>Control Panini 2026</h1>
          <p className="subtitle">
            Marcá las figuritas que tenés, cargá el jugador, revisá faltantes y administrá repetidas para intercambiar.
          </p>
        </div>
        <div className="hero-actions">
          <button onClick={() => copyList('missing')}>Copiar faltantes</button>
          <button onClick={() => copyList('duplicates')}>Copiar repetidas</button>
          <button onClick={exportAlbum}>Exportar JSON</button>
        </div>
      </section>

      {message && <div className="message">{message}</div>}

      <section className="stats">
        <article><span>Completadas</span><strong>{stats.have}</strong><small>{stats.percent}%</small></article>
        <article><span>Faltantes</span><strong>{stats.missing}</strong><small>para conseguir</small></article>
        <article><span>Repetidas</span><strong>{stats.duplicates}</strong><small>para cambiar</small></article>
        <article><span>Total</span><strong>{stats.total}</strong><small>figuritas</small></article>
      </section>

      <section className="toolbar">
        <input
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Buscar equipo, código o jugador..."
        />
        <select value={country} onChange={event => setCountry(event.target.value)}>
          <option value="all">Todos los equipos</option>
          {album.countries.map(group => (
            <option key={group.code} value={group.code}>{group.name}</option>
          ))}
        </select>
        <select value={filter} onChange={event => setFilter(event.target.value)}>
          <option value="all">Todas</option>
          <option value="have">Tengo</option>
          <option value="missing">Faltantes</option>
          <option value="duplicates">Repetidas</option>
          <option value="withPlayer">Con jugador</option>
          <option value="withoutPlayer">Sin jugador</option>
        </select>
        <button onClick={() => setView(view === 'cards' ? 'compact' : 'cards')}>
          {view === 'cards' ? 'Vista compacta' : 'Vista tarjetas'}
        </button>
        <button onClick={() => setShowImport(!showImport)}>Importar</button>
        <button className="danger" onClick={resetAlbum}>Reiniciar</button>
      </section>

      {showImport && (
        <section className="import-box">
          <h2>Importar colección</h2>
          <textarea
            value={importText}
            onChange={event => setImportText(event.target.value)}
            placeholder="Pegá acá el JSON exportado..."
          />
          <button onClick={importAlbum}>Importar colección</button>
        </section>
      )}

      <section className="album">
        {visibleCountries.map(group => {
          const original = album.countries.find(item => item.code === group.code);
          const total = original ? original.stickers.length : group.stickers.length;
          const have = original ? original.stickers.filter(sticker => sticker.have).length : 0;
          const percent = total ? Math.round((have / total) * 100) : 0;

          return (
            <article className="country" key={group.code}>
              <header className="country-header">
                <div>
                  <h2>{group.name} <span>{group.code}</span></h2>
                  <p>{have}/{total} completas · {total - have} faltantes</p>
                </div>
                <div className="progress"><i style={{ width: `${percent}%` }} /></div>
              </header>

              <div className={view === 'cards' ? 'stickers' : 'stickers compact'}>
                {group.stickers.map(sticker => (
                  <div className={sticker.have ? 'sticker owned' : 'sticker'} key={sticker.id}>
                    <button className="sticker-top" onClick={() => toggleSticker(group.code, sticker)}>
                      <strong>{sticker.code}</strong>
                      <span>{sticker.have ? 'Tengo' : 'Falta'}</span>
                    </button>

                    {group.code !== 'FWC' && (
                      <label>
                        Jugador
                        <input
                          value={sticker.player}
                          onChange={event => updateSticker(group.code, sticker.id, { player: event.target.value })}
                          placeholder="Nombre del jugador"
                        />
                      </label>
                    )}

                    <div className="dupes">
                      <span>Repetidas</span>
                      <button onClick={() => changeDuplicates(group.code, sticker, -1)}>-</button>
                      <b>{sticker.duplicates || 0}</b>
                      <button onClick={() => changeDuplicates(group.code, sticker, 1)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <footer>
        <p>Base editable con 48 selecciones y estructura de álbum: 32 especiales + 20 figuritas por selección.</p>
      </footer>
    </main>
  );
}
