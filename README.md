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


## Cambios integrados

- Se reemplazó Burkina Faso por Bosnia y Herzegovina (BIH).
- En Especiales / Intro (FWC) no aparece el campo de jugador.


## Grupos integrados

Grupo A: México, Sudáfrica, Corea del Sur y República Checa  
Grupo B: Canadá, Bosnia y Herzegovina, Qatar y Suiza  
Grupo C: Brasil, Marruecos, Haití y Escocia  
Grupo D: Estados Unidos, Paraguay, Australia y Turquía  
Grupo E: Alemania, Curazao, Costa de Marfil y Ecuador  
Grupo F: Países Bajos, Japón, Suecia y Túnez  
Grupo G: Bélgica, Egipto, Irán y Nueva Zelanda  
Grupo H: España, Cabo Verde, Arabia Saudita y Uruguay  
Grupo I: Francia, Senegal, Irak y Noruega  
Grupo J: Argentina, Argelia, Austria y Jordania  
Grupo K: Portugal, RD Congo, Uzbekistán y Colombia  
Grupo L: Inglaterra, Croacia, Ghana y Panamá  

También se mantiene la regla: en Especiales / Intro (FWC) no se muestra el campo de jugador.
