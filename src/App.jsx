import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'panini-2026-pro-ui-v1';

const TEAMS = [
  {
    "group": "A",
    "code": "MEX",
    "name": "México"
  },
  {
    "group": "A",
    "code": "RSA",
    "name": "Sudáfrica"
  },
  {
    "group": "A",
    "code": "KOR",
    "name": "Corea del Sur"
  },
  {
    "group": "A",
    "code": "CZE",
    "name": "República Checa"
  },
  {
    "group": "B",
    "code": "CAN",
    "name": "Canadá"
  },
  {
    "group": "B",
    "code": "BIH",
    "name": "Bosnia y Herzegovina"
  },
  {
    "group": "B",
    "code": "QAT",
    "name": "Qatar"
  },
  {
    "group": "B",
    "code": "SUI",
    "name": "Suiza"
  },
  {
    "group": "C",
    "code": "BRA",
    "name": "Brasil"
  },
  {
    "group": "C",
    "code": "MAR",
    "name": "Marruecos"
  },
  {
    "group": "C",
    "code": "HAI",
    "name": "Haití"
  },
  {
    "group": "C",
    "code": "SCO",
    "name": "Escocia"
  },
  {
    "group": "D",
    "code": "USA",
    "name": "Estados Unidos"
  },
  {
    "group": "D",
    "code": "PAR",
    "name": "Paraguay"
  },
  {
    "group": "D",
    "code": "AUS",
    "name": "Australia"
  },
  {
    "group": "D",
    "code": "TUR",
    "name": "Turquía"
  },
  {
    "group": "E",
    "code": "GER",
    "name": "Alemania"
  },
  {
    "group": "E",
    "code": "CUW",
    "name": "Curazao"
  },
  {
    "group": "E",
    "code": "CIV",
    "name": "Costa de Marfil"
  },
  {
    "group": "E",
    "code": "ECU",
    "name": "Ecuador"
  },
  {
    "group": "F",
    "code": "NED",
    "name": "Países Bajos"
  },
  {
    "group": "F",
    "code": "JPN",
    "name": "Japón"
  },
  {
    "group": "F",
    "code": "SWE",
    "name": "Suecia"
  },
  {
    "group": "F",
    "code": "TUN",
    "name": "Túnez"
  },
  {
    "group": "G",
    "code": "BEL",
    "name": "Bélgica"
  },
  {
    "group": "G",
    "code": "EGY",
    "name": "Egipto"
  },
  {
    "group": "G",
    "code": "IRN",
    "name": "Irán"
  },
  {
    "group": "G",
    "code": "NZL",
    "name": "Nueva Zelanda"
  },
  {
    "group": "H",
    "code": "ESP",
    "name": "España"
  },
  {
    "group": "H",
    "code": "CPV",
    "name": "Cabo Verde"
  },
  {
    "group": "H",
    "code": "KSA",
    "name": "Arabia Saudita"
  },
  {
    "group": "H",
    "code": "URU",
    "name": "Uruguay"
  },
  {
    "group": "I",
    "code": "FRA",
    "name": "Francia"
  },
  {
    "group": "I",
    "code": "SEN",
    "name": "Senegal"
  },
  {
    "group": "I",
    "code": "IRQ",
    "name": "Irak"
  },
  {
    "group": "I",
    "code": "NOR",
    "name": "Noruega"
  },
  {
    "group": "J",
    "code": "ARG",
    "name": "Argentina"
  },
  {
    "group": "J",
    "code": "ALG",
    "name": "Argelia"
  },
  {
    "group": "J",
    "code": "AUT",
    "name": "Austria"
  },
  {
    "group": "J",
    "code": "JOR",
    "name": "Jordania"
  },
  {
    "group": "K",
    "code": "POR",
    "name": "Portugal"
  },
  {
    "group": "K",
    "code": "COD",
    "name": "RD Congo"
  },
  {
    "group": "K",
    "code": "UZB",
    "name": "Uzbekistán"
  },
  {
    "group": "K",
    "code": "COL",
    "name": "Colombia"
  },
  {
    "group": "L",
    "code": "ENG",
    "name": "Inglaterra"
  },
  {
    "group": "L",
    "code": "CRO",
    "name": "Croacia"
  },
  {
    "group": "L",
    "code": "GHA",
    "name": "Ghana"
  },
  {
    "group": "L",
    "code": "PAN",
    "name": "Panamá"
  }
];

const GROUPS = ['A','B','C','D','E','F','G','H','I','J','K','L'];

function buildAlbum() {
  const fwc = {
    id: 'FWC',
    code: 'FWC',
    name: 'Especiales / Intro FWC',
    type: 'special',
    group: 'Especiales',
    stickers: Array.from({ length: 19 }, (_, index) => ({
      id: `FWC-${index + 1}`,
      code: `FWC-${index + 1}`,
      number: index + 1,
      player: '',
      have: false,
      duplicates: 0
    }))
  };

  const cc = {
    id: 'CC',
    code: 'CC',
    name: 'Especiales / Intro CC',
    type: 'special',
    group: 'Especiales',
    stickers: Array.from({ length: 14 }, (_, index) => ({
      id: `CC-${index + 1}`,
      code: `CC-${index + 1}`,
      number: index + 1,
      player: '',
      have: false,
      duplicates: 0
    }))
  };

  const countries = TEAMS.map(team => ({
    ...team,
    id: team.code,
    type: 'team',
    stickers: Array.from({ length: 20 }, (_, index) => ({
      id: `${team.code}-${index + 1}`,
      code: `${team.code} ${index + 1}`,
      number: index + 1,
      player: '',
      have: false,
      duplicates: 0
    }))
  }));

  return {
    version: 3,
    createdWith: 'panini-2026-pro-ui',
    sections: [fwc, cc, ...countries]
  };
}

function loadAlbum() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return buildAlbum();
    const parsed = JSON.parse(saved);
    if (!parsed || !Array.isArray(parsed.sections)) return buildAlbum();
    return parsed;
  } catch {
    return buildAlbum();
  }
}

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function percent(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

function download(filename, content) {
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function getInitials(name) {
  return name.split(' ').map(part => part[0]).join('').slice(0, 3).toUpperCase();
}

export default function App() {
  const [album, setAlbum] = useState(loadAlbum);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sectionFilter, setSectionFilter] = useState('all');
  const [groupFilter, setGroupFilter] = useState('all');
  const [view, setView] = useState('cards');
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState('');
  const [toast, setToast] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(album));
  }, [album]);

  const allStickers = useMemo(() => album.sections.flatMap(section =>
    section.stickers.map(sticker => ({ ...sticker, section }))
  ), [album]);

  const stats = useMemo(() => {
    const total = allStickers.length;
    const have = allStickers.filter(sticker => sticker.have).length;
    const duplicates = allStickers.reduce((sum, sticker) => sum + Number(sticker.duplicates || 0), 0);
    return {
      total,
      have,
      missing: total - have,
      duplicates,
      percent: percent(have, total)
    };
  }, [allStickers]);

  const groupStats = useMemo(() => GROUPS.map(group => {
    const teams = album.sections.filter(section => section.group === group);
    const stickers = teams.flatMap(section => section.stickers);
    const have = stickers.filter(sticker => sticker.have).length;
    return {
      group,
      teams,
      total: stickers.length,
      have,
      percent: percent(have, stickers.length)
    };
  }), [album]);

  const filteredSections = useMemo(() => {
    const q = normalize(search.trim());

    return album.sections
      .filter(section => sectionFilter === 'all' || section.code === sectionFilter)
      .filter(section => groupFilter === 'all' || section.group === groupFilter || (groupFilter === 'Especiales' && section.type === 'special'))
      .map(section => {
        const stickers = section.stickers.filter(sticker => {
          const haystack = normalize(`${section.name} ${section.code} ${section.group} ${sticker.code} ${sticker.player}`);
          const matchesSearch = !q || haystack.includes(q);
          const matchesFilter =
            filter === 'all' ||
            (filter === 'have' && sticker.have) ||
            (filter === 'missing' && !sticker.have) ||
            (filter === 'duplicates' && sticker.duplicates > 0) ||
            (filter === 'withPlayer' && sticker.player.trim()) ||
            (filter === 'withoutPlayer' && section.type === 'team' && !sticker.player.trim());

          return matchesSearch && matchesFilter;
        });
        return { ...section, stickers };
      })
      .filter(section => section.stickers.length > 0);
  }, [album, search, filter, sectionFilter, groupFilter]);

  function updateSticker(sectionCode, stickerId, patch) {
    setAlbum(current => ({
      ...current,
      sections: current.sections.map(section => {
        if (section.code !== sectionCode) return section;
        return {
          ...section,
          stickers: section.stickers.map(sticker =>
            sticker.id === stickerId ? { ...sticker, ...patch } : sticker
          )
        };
      })
    }));
  }

  function toggleHave(section, sticker) {
    updateSticker(section.code, sticker.id, { have: !sticker.have });
  }

  function addDuplicate(section, sticker, delta) {
    const next = Math.max(0, Number(sticker.duplicates || 0) + delta);
    updateSticker(section.code, sticker.id, {
      duplicates: next,
      have: sticker.have || next > 0
    });
  }

  function copyList(kind) {
    const rows = allStickers
      .filter(item => kind === 'missing' ? !item.have : item.duplicates > 0)
      .map(item => {
        const player = item.player ? ` - ${item.player}` : '';
        if (kind === 'missing') return `${item.section.code} ${item.number}${player}`;
        return `${item.section.code} ${item.number} x${item.duplicates}${player}`;
      });

    const title = kind === 'missing' ? 'Figuritas faltantes' : 'Figuritas repetidas';
    const text = `${title}\n${rows.length ? rows.join('\n') : 'No hay figuritas para mostrar.'}`;

    navigator.clipboard?.writeText(text).then(
      () => setToast(`${title} copiadas.`),
      () => setToast(text)
    );
  }

  function exportAlbum() {
    download('panini-2026-coleccion.json', JSON.stringify(album, null, 2));
    setToast('Colección exportada.');
  }

  function importAlbum() {
    try {
      const parsed = JSON.parse(importText);
      if (!parsed || !Array.isArray(parsed.sections)) throw new Error('Formato inválido');
      setAlbum(parsed);
      setImportText('');
      setShowImport(false);
      setToast('Colección importada.');
    } catch {
      setToast('No se pudo importar el JSON.');
    }
  }

  function resetAlbum() {
    if (!window.confirm('¿Seguro que querés reiniciar toda la colección?')) return;
    setAlbum(buildAlbum());
    setToast('Colección reiniciada.');
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-copy">
          <div className="pill">🏆 Mundial 2026 · Álbum Panini</div>
          <h1>Control de figuritas</h1>
          <p>Gestioná tu colección por grupos, marcá figuritas, cargá jugadores y controlá repetidas.</p>
        </div>

        <div className="hero-panel">
          <div className="big-progress">
            <strong>{stats.percent}%</strong>
            <span>completo</span>
          </div>
          <div className="progress-line"><i style={{ width: `${stats.percent}%` }} /></div>
        </div>
      </header>

      <section className="stats">
        <article><span>Completadas</span><strong>{stats.have}</strong><small>figuritas</small></article>
        <article><span>Faltantes</span><strong>{stats.missing}</strong><small>para conseguir</small></article>
        <article><span>Repetidas</span><strong>{stats.duplicates}</strong><small>para canjear</small></article>
        <article><span>Total</span><strong>{stats.total}</strong><small>19 FWC + 14 CC + selecciones</small></article>
      </section>

      <section className="groups">
        <article className="group-card special-card" onClick={() => setGroupFilter(groupFilter === 'Especiales' ? 'all' : 'Especiales')}>
          <h2>Especiales</h2>
          <p>FWC 19 · CC 14</p>
          <div className="mini-bar"><i style={{ width: `${percent(album.sections.filter(s => s.type === 'special').flatMap(s => s.stickers).filter(s => s.have).length, 33)}%` }} /></div>
        </article>

        {groupStats.map(item => (
          <article className="group-card" key={item.group} onClick={() => setGroupFilter(groupFilter === item.group ? 'all' : item.group)}>
            <h2>Grupo {item.group}</h2>
            <p>{item.teams.map(team => team.name).join(' · ')}</p>
            <div className="mini-bar"><i style={{ width: `${item.percent}%` }} /></div>
          </article>
        ))}
      </section>

      <section className="filters">
        <input value={search} onChange={event => setSearch(event.target.value)} placeholder="Buscar país, grupo, código o jugador..." />
        <select value={groupFilter} onChange={event => setGroupFilter(event.target.value)}>
          <option value="all">Todos los grupos</option>
          <option value="Especiales">Especiales</option>
          {GROUPS.map(group => <option key={group} value={group}>Grupo {group}</option>)}
        </select>
        <select value={sectionFilter} onChange={event => setSectionFilter(event.target.value)}>
          <option value="all">Todas las secciones</option>
          {album.sections.map(section => <option key={section.code} value={section.code}>{section.name}</option>)}
        </select>
        <select value={filter} onChange={event => setFilter(event.target.value)}>
          <option value="all">Todas</option>
          <option value="have">Tengo</option>
          <option value="missing">Faltantes</option>
          <option value="duplicates">Repetidas</option>
          <option value="withPlayer">Con jugador</option>
          <option value="withoutPlayer">Sin jugador</option>
        </select>
        <button onClick={() => setView(view === 'cards' ? 'compact' : 'cards')}>{view === 'cards' ? 'Vista compacta' : 'Vista tarjetas'}</button>
      </section>

      <main className="album">
        {filteredSections.map(section => {
          const original = album.sections.find(item => item.code === section.code);
          const total = original?.stickers.length || section.stickers.length;
          const have = original?.stickers.filter(sticker => sticker.have).length || 0;
          const p = percent(have, total);

          return (
            <section className="section-card" key={section.code}>
              <header className="section-header">
                <div className="badge">{section.type === 'special' ? section.code : getInitials(section.name)}</div>
                <div>
                  <h2>{section.name} {section.type === 'team' && <span>Grupo {section.group}</span>}</h2>
                  <p>{have}/{total} completas · {total - have} faltantes</p>
                </div>
                <div className="section-progress"><i style={{ width: `${p}%` }} /></div>
              </header>

              <div className={view === 'compact' ? 'stickers compact' : 'stickers'}>
                {section.stickers.map(sticker => (
                  <article className={sticker.have ? 'sticker owned' : 'sticker'} key={sticker.id}>
                    <button className="sticker-top" onClick={() => toggleHave(section, sticker)}>
                      <strong>{sticker.code}</strong>
                      <span>{sticker.have ? 'Tengo' : 'Falta'}</span>
                    </button>

                    {section.type === 'team' && (
                      <label className="player-field">
                        Jugador
                        <input
                          value={sticker.player}
                          onChange={event => updateSticker(section.code, sticker.id, { player: event.target.value })}
                          placeholder="Nombre del jugador"
                        />
                      </label>
                    )}

                    <div className="dupes">
                      <span>Repetidas</span>
                      <button onClick={() => addDuplicate(section, sticker, -1)}>-</button>
                      <b>{sticker.duplicates || 0}</b>
                      <button onClick={() => addDuplicate(section, sticker, 1)}>+</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
