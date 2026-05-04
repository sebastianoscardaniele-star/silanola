import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'album-mundial-2026-final-pro-v1'

const TEAMS = [
  { group: 'A', code: 'MEX', name: 'Mexico' },
  { group: 'A', code: 'KOR', name: 'Corea del Sur' },
  { group: 'A', code: 'RSA', name: 'Sudafrica' },
  { group: 'A', code: 'CZE', name: 'Chequia' },
  { group: 'B', code: 'CAN', name: 'Canada' },
  { group: 'B', code: 'SUI', name: 'Suiza' },
  { group: 'B', code: 'QAT', name: 'Qatar' },
  { group: 'B', code: 'BIH', name: 'Bosnia y Herzegovina' },
  { group: 'C', code: 'BRA', name: 'Brasil' },
  { group: 'C', code: 'SCO', name: 'Escocia' },
  { group: 'C', code: 'MAR', name: 'Marruecos' },
  { group: 'C', code: 'HAI', name: 'Haiti' },
  { group: 'D', code: 'USA', name: 'Estados Unidos' },
  { group: 'D', code: 'AUS', name: 'Australia' },
  { group: 'D', code: 'PAR', name: 'Paraguay' },
  { group: 'D', code: 'TUR', name: 'Turquia' },
  { group: 'E', code: 'GER', name: 'Alemania' },
  { group: 'E', code: 'ECU', name: 'Ecuador' },
  { group: 'E', code: 'CIV', name: 'Costa de Marfil' },
  { group: 'E', code: 'CUW', name: 'Curazao' },
  { group: 'F', code: 'NED', name: 'Paises Bajos' },
  { group: 'F', code: 'JPN', name: 'Japon' },
  { group: 'F', code: 'TUN', name: 'Tunez' },
  { group: 'F', code: 'SWE', name: 'Suecia' },
  { group: 'G', code: 'BEL', name: 'Belgica' },
  { group: 'G', code: 'IRN', name: 'Iran' },
  { group: 'G', code: 'EGY', name: 'Egipto' },
  { group: 'G', code: 'NZL', name: 'Nueva Zelanda' },
  { group: 'H', code: 'FRA', name: 'Francia' },
  { group: 'H', code: 'NOR', name: 'Noruega' },
  { group: 'H', code: 'SEN', name: 'Senegal' },
  { group: 'H', code: 'IRQ', name: 'Irak' },
  { group: 'I', code: 'ARG', name: 'Argentina' },
  { group: 'I', code: 'AUT', name: 'Austria' },
  { group: 'I', code: 'ALG', name: 'Argelia' },
  { group: 'I', code: 'JOR', name: 'Jordania' },
  { group: 'J', code: 'ESP', name: 'Espana' },
  { group: 'J', code: 'URU', name: 'Uruguay' },
  { group: 'J', code: 'KSA', name: 'Arabia Saudita' },
  { group: 'J', code: 'CPV', name: 'Cabo Verde' },
  { group: 'K', code: 'POR', name: 'Portugal' },
  { group: 'K', code: 'COL', name: 'Colombia' },
  { group: 'K', code: 'UZB', name: 'Uzbekistan' },
  { group: 'K', code: 'COD', name: 'RD Congo' },
  { group: 'L', code: 'ENG', name: 'Inglaterra' },
  { group: 'L', code: 'CRO', name: 'Croacia' },
  { group: 'L', code: 'GHA', name: 'Ghana' },
  { group: 'L', code: 'PAN', name: 'Panama' }
]

function buildInitialAlbum() {
  const sections = [
    {
      type: 'special',
      group: 'Especiales',
      code: 'FWC',
      name: 'Especiales Mundial 2026',
      stickers: Array.from({ length: 32 }, (_, index) => ({
        id: `FWC-${index + 1}`,
        number: index + 1,
        label: `FWC ${index + 1}`,
        player: `Especial ${index + 1}`,
        have: false,
        duplicates: 0
      }))
    },
    ...TEAMS.map((team) => ({
      ...team,
      type: 'team',
      stickers: Array.from({ length: 20 }, (_, index) => ({
        id: `${team.code}-${index + 1}`,
        number: index + 1,
        label: `${team.code} ${index + 1}`,
        player: `Jugador ${index + 1}`,
        have: false,
        duplicates: 0
      }))
    }))
  ]
  return { version: 1, sections }
}

function safeLoadAlbum() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return buildInitialAlbum()
    const parsed = JSON.parse(saved)
    if (!parsed || !Array.isArray(parsed.sections)) return buildInitialAlbum()
    return parsed
  } catch {
    return buildInitialAlbum()
  }
}

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export default function App() {
  const [album, setAlbum] = useState(safeLoadAlbum)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [sectionCode, setSectionCode] = useState('all')
  const [compact, setCompact] = useState(false)
  const [importText, setImportText] = useState('')
  const [showImport, setShowImport] = useState(false)
  const [copied, setCopied] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(album))
  }, [album])

  const stats = useMemo(() => {
    const all = album.sections.flatMap((section) => section.stickers)
    const total = all.length
    const have = all.filter((sticker) => sticker.have).length
    const duplicates = all.reduce((sum, sticker) => sum + Number(sticker.duplicates || 0), 0)
    return {
      total,
      have,
      missing: total - have,
      duplicates,
      percent: total ? Math.round((have / total) * 100) : 0
    }
  }, [album])

  const visibleSections = useMemo(() => {
    const q = normalize(query)
    return album.sections
      .filter((section) => sectionCode === 'all' || section.code === sectionCode)
      .map((section) => {
        const stickers = section.stickers.filter((sticker) => {
          const searchable = normalize(`${section.name} ${section.code} ${section.group} ${sticker.label} ${sticker.player}`)
          const matchesQuery = !q || searchable.includes(q)
          const matchesFilter =
            filter === 'all' ||
            (filter === 'have' && sticker.have) ||
            (filter === 'missing' && !sticker.have) ||
            (filter === 'duplicates' && Number(sticker.duplicates || 0) > 0) ||
            (filter === 'withPlayer' && sticker.player && !/^Jugador \d+$/.test(sticker.player)) ||
            (filter === 'withoutPlayer' && (!sticker.player || /^Jugador \d+$/.test(sticker.player)))
          return matchesQuery && matchesFilter
        })
        return { ...section, stickers }
      })
      .filter((section) => section.stickers.length > 0)
  }, [album, query, filter, sectionCode])

  function updateSticker(sectionCodeToUpdate, stickerId, patch) {
    setAlbum((current) => ({
      ...current,
      sections: current.sections.map((section) => {
        if (section.code !== sectionCodeToUpdate) return section
        return {
          ...section,
          stickers: section.stickers.map((sticker) =>
            sticker.id === stickerId ? { ...sticker, ...patch } : sticker
          )
        }
      })
    }))
  }

  function setPlayer(section, sticker, player) {
    updateSticker(section.code, sticker.id, { player })
  }

  function toggleSticker(section, sticker) {
    updateSticker(section.code, sticker.id, { have: !sticker.have })
  }

  function addDuplicate(section, sticker, delta) {
    const duplicates = Math.max(0, Number(sticker.duplicates || 0) + delta)
    updateSticker(section.code, sticker.id, { duplicates, have: sticker.have || duplicates > 0 })
  }

  function buildList(kind) {
    return album.sections.flatMap((section) =>
      section.stickers
        .filter((sticker) => kind === 'missing' ? !sticker.have : Number(sticker.duplicates || 0) > 0)
        .map((sticker) => {
          const base = `${sticker.label} - ${section.name} - ${sticker.player || 'Sin jugador'}`
          return kind === 'duplicates' ? `${base} x${sticker.duplicates}` : base
        })
    )
  }

  function copyList(kind) {
    const title = kind === 'missing' ? 'Figuritas faltantes' : 'Figuritas repetidas'
    const rows = buildList(kind)
    const text = `${title}\n${rows.length ? rows.join('\n') : 'No hay figuritas para mostrar.'}`
    navigator.clipboard?.writeText(text)
    setCopied(title)
    window.setTimeout(() => setCopied(''), 1600)
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(album, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'album-mundial-2026.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  function importJson() {
    try {
      const parsed = JSON.parse(importText)
      if (!parsed || !Array.isArray(parsed.sections)) throw new Error('Formato invalido')
      setAlbum(parsed)
      setImportText('')
      setShowImport(false)
    } catch {
      alert('No se pudo importar. Verifica que sea un JSON exportado desde esta app.')
    }
  }

  function resetAlbum() {
    const ok = window.confirm('Se van a borrar tus marcadas, repetidas y nombres editados. Continuar?')
    if (ok) setAlbum(buildInitialAlbum())
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <div>
            <p className="eyebrow">FIFA World Cup 26</p>
            <h1>Album Mundial 2026</h1>
            <p className="subtitle">Controla tus figuritas por seleccion, jugadores, faltantes y repetidas para intercambio.</p>
          </div>
          <div className="heroActions">
            <button onClick={() => copyList('missing')} className="secondaryButton">Copiar faltantes</button>
            <button onClick={() => copyList('duplicates')} className="secondaryButton">Copiar repetidas</button>
            <button onClick={exportJson} className="primaryButton">Exportar JSON</button>
          </div>
        </div>
      </header>

      <main className="layout">
        {copied && <div className="toast">Copiado: {copied}</div>}

        <section className="statsGrid">
          <article className="statCard"><span>Completadas</span><strong>{stats.have}</strong><small>{stats.percent}% del album</small></article>
          <article className="statCard"><span>Faltantes</span><strong>{stats.missing}</strong><small>para conseguir</small></article>
          <article className="statCard"><span>Repetidas</span><strong>{stats.duplicates}</strong><small>para cambiar</small></article>
          <article className="statCard"><span>Total</span><strong>{stats.total}</strong><small>32 especiales + 48 x 20</small></article>
        </section>

        <section className="toolbar">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar pais, grupo, codigo, numero o jugador" />
          <select value={sectionCode} onChange={(event) => setSectionCode(event.target.value)}>
            <option value="all">Todas las secciones</option>
            {album.sections.map((section) => <option key={section.code} value={section.code}>{section.group} - {section.name}</option>)}
          </select>
          <select value={filter} onChange={(event) => setFilter(event.target.value)}>
            <option value="all">Todas</option>
            <option value="have">Tengo</option>
            <option value="missing">Faltantes</option>
            <option value="duplicates">Repetidas</option>
            <option value="withPlayer">Con jugador editado</option>
            <option value="withoutPlayer">Sin jugador editado</option>
          </select>
          <button onClick={() => setCompact(!compact)}>{compact ? 'Vista amplia' : 'Vista compacta'}</button>
          <button onClick={() => setShowImport(!showImport)}>Importar</button>
          <button onClick={resetAlbum} className="dangerButton">Reiniciar</button>
        </section>

        {showImport && (
          <section className="importBox">
            <h2>Importar coleccion</h2>
            <textarea value={importText} onChange={(event) => setImportText(event.target.value)} placeholder="Pega aca el JSON exportado" />
            <button onClick={importJson} className="primaryButton">Importar ahora</button>
          </section>
        )}

        <section className="albumSections">
          {visibleSections.map((section) => {
            const originalSection = album.sections.find((item) => item.code === section.code)
            const total = originalSection?.stickers.length || section.stickers.length
            const have = originalSection?.stickers.filter((sticker) => sticker.have).length || 0
            const progress = total ? Math.round((have / total) * 100) : 0
            return (
              <article className="sectionCard" key={section.code}>
                <div className="sectionHeader">
                  <div>
                    <span className="groupPill">Grupo {section.group}</span>
                    <h2>{section.name} <em>{section.code}</em></h2>
                    <p>{have}/{total} completas - {total - have} faltantes</p>
                  </div>
                  <div className="progressWrap"><div style={{ width: `${progress}%` }} /></div>
                </div>

                <div className={compact ? 'stickersGrid compact' : 'stickersGrid'}>
                  {section.stickers.map((sticker) => (
                    <div className={sticker.have ? 'stickerCard owned' : 'stickerCard'} key={sticker.id}>
                      <button className="stickerTop" onClick={() => toggleSticker(section, sticker)}>
                        <span className="stickerNumber">{sticker.label}</span>
                        <span className="checkMark">{sticker.have ? '✓' : '○'}</span>
                      </button>
                      <div className="playerName">{sticker.player || 'Nombre de jugador'}</div>
                      {!compact && (
                        <>
                          <label className="playerInputLabel">Jugador</label>
                          <input className="playerInput" value={sticker.player || ''} onChange={(event) => setPlayer(section, sticker, event.target.value)} placeholder="Nombre del jugador" />
                          <div className="duplicateRow">
                            <span>Repetidas</span>
                            <div>
                              <button onClick={() => addDuplicate(section, sticker, -1)}>-</button>
                              <strong>{sticker.duplicates || 0}</strong>
                              <button onClick={() => addDuplicate(section, sticker, 1)}>+</button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </section>
      </main>
    </div>
  )
}
