# Album Mundial 2026 - Version final pro

Aplicacion React + Vite lista para desplegar en Vercel.

## Incluye

- Node configurado en `24.x` para Vercel.
- Sin shadcn, sin alias `@`, sin Supabase y sin dependencias innecesarias.
- 48 selecciones clasificadas al Mundial 2026.
- Formato base de album: 32 figuritas especiales + 20 figuritas por seleccion.
- Nombre editable por figurita.
- Control de figuritas que tenes, faltantes y repetidas.
- Busqueda por pais, grupo, codigo, numero o jugador.
- Exportacion e importacion JSON.
- Colores inspirados en Mundial 2026.

## Uso local

```bash
npm install
npm run dev
```

## Build local

```bash
npm run build
```

## Deploy en Vercel

1. Descomprimir el ZIP.
2. Subir la carpeta a GitHub.
3. Entrar a Vercel.
4. Importar el repositorio.
5. Framework Preset: Vite.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Deploy.

No requiere variables de entorno.
