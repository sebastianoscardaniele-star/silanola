# Control Panini Mundial 2026 - Pro UI

Aplicación web en React + Vite lista para Vercel.

## Incluye

- Grupos A a L según la lista indicada.
- 48 selecciones.
- Especiales divididas en:
  - 19 FWC
  - 14 CC
- Las secciones FWC y CC no muestran campo de jugador.
- Cada selección tiene 20 figuritas.
- Nombre de jugador editable en figuritas de selecciones.
- Marcado de figuritas que tenés.
- Repetidas para intercambio.
- Faltantes.
- Progreso general, por grupo y por selección.
- Datos guardados en el navegador.
- Sin Supabase, sin shadcn, sin alias, sin dependencias extra.
- Node 24 para Vercel.

## Deploy en Vercel

1. Subí esta carpeta a GitHub.
2. En Vercel, importá el repositorio.
3. Framework Preset: Vite.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Deploy.

## Comandos locales

```bash
npm install
npm run dev
npm run build
```

## UI limpia total

Se eliminó de la interfaz la barra de acciones técnicas: copiar faltantes, copiar repetidas, exportar JSON, importar JSON y reiniciar.


## Calendario integrado

Se agregó un apartado de calendario con 104 partidos, incluyendo fase de grupos y eliminación directa.
Incluye fecha, fase, grupo/cruce, horarios informados y sede.

## Jugadores agregados

Se agregaron Brasil (BRA), Marruecos (MAR), Haití (HAI) y Escocia (SCO) al objeto PLAYER_PRESETS.

## Jugadores agregados

Se agregaron USA, PAR, AUS, TUR, GER, CUW, CIV, ECU, NED, JPN, SWE, TUN, BEL, EGY, IRN y NZL a PLAYER_PRESETS.

## Jugadores agregados

Se agregaron ESP, CPV, KSA, URU, FRA, SEN, IRQ, NOR, ARG, ALG, AUT y JOR a PLAYER_PRESETS.

## Jugadores agregados

Se agregaron POR, COD, UZB, COL, ENG, CRO, GHA y PAN a PLAYER_PRESETS.

## Apartado Cómo usar

Se agregó una sección seleccionable junto a Álbum y Calendario con la explicación de botones, filtros, calendario, guardado automático y consejos de uso.
