# Panini Mundial 2026 - Vercel

Aplicación web en Vite + React para controlar figuritas del álbum Panini Mundial 2026.

## Incluye

- 48 selecciones.
- Estructura base: 32 especiales + 20 figuritas por selección.
- Campo editable de jugador por figurita.
- Marcado de figuritas que tenés.
- Conteo de repetidas.
- Listado de faltantes.
- Exportar/importar JSON.
- Diseño con colores inspirados en Mundial 2026.
- Proyecto simple para Vercel: sin Supabase, sin shadcn, sin alias y sin dependencias extra.

## Deploy en Vercel

1. Subí esta carpeta a GitHub.
2. En Vercel, importá el repositorio.
3. Framework Preset: Vite.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Deploy.

## Importante

El archivo `package.json` usa:

```json
"engines": {
  "node": "24.x"
}
```

Esto evita el problema de versión Node reportado por Vercel.
