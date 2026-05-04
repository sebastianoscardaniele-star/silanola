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

## Integración final

Esta versión integra:
- Base con calendario en sección seleccionable.
- Nombres visibles en el campo Jugador para México, Sudáfrica, Corea del Sur y República Checa.
- Persistencia automática de colección y preferencias de vista.

## Todos los equipos completados automáticamente

Se agregaron presets visibles para todos los equipos restantes. Para equipos sin lista nominal provista, se precargó: figurita 1 = Escudo, figurita 13 = Foto de equipo y el resto como código + número, editable desde la app.

Equipos autocompletados: MEX, RSA, KOR, CZE, BRA, MAR, HAI, SCO, USA, PAR, AUS, TUR, GER, CUW, CIV, ECU, NED, JPN, SWE, TUN, BEL, EGY, IRN, NZL, ESP, CPV, KSA, URU, FRA, SEN, IRQ, NOR, ARG, ALG, AUT, JOR, POR, COD, UZB, COL, ENG, CRO, GHA, PAN


## Versión final consolidada

Esta versión integra todos los cambios desde `panini-2026-calendario-jugadores-integrado.zip` hasta la última actualización:

- Calendario de partidos en pestaña separada.
- Álbum y calendario seleccionables desde la barra de secciones.
- Nombres visibles en el campo Jugador para México, Sudáfrica, Corea del Sur y República Checa.
- Nombres cargados para Canadá, Bosnia y Herzegovina, Qatar y Suiza.
- Persistencia automática en el navegador.
- Todos los equipos restantes autocompletados de forma editable:
  - figurita 1 = Escudo
  - figurita 13 = Foto de equipo
  - resto = código + número
- Especiales divididas en 19 FWC + 14 CC.
- ZIP limpio para GitHub y Vercel.

## Corrección CAN / BIH / QAT / SUI

Se forzaron los nombres reales para Canadá, Bosnia y Herzegovina, Qatar y Suiza, reemplazando placeholders vacíos o del tipo `CAN 2`, `BIH 2`, etc.

## Fix estable de jugadores

Se consolidó una sola fuente `PLAYER_PRESETS` para MEX, RSA, KOR, CZE, CAN, BIH, QAT y SUI. La app aplica esos nombres al construir el álbum, al cargar datos guardados y al montar la app.

## Corrección definitiva de nombres

Se consolidó una única fuente `PLAYER_PRESETS` para MEX, RSA, KOR, CZE, CAN, BIH, QAT y SUI.
Además, el campo visible de cada tarjeta muestra primero el preset correspondiente, por lo que los nombres aparecen aunque hubiera datos viejos guardados.
