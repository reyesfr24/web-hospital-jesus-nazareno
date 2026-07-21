# Idioma

Habla siempre en español al trabajar en este proyecto, en todas las respuestas.

# Entorno de desarrollo

Este proyecto se ejecuta en Windows. Claude Code corre en WSL únicamente para editar código: **no instales dependencias ni levantes el servidor de desarrollo (`npm run dev` / `pnpm dev` / `pnpm install`, etc.) desde WSL**. El `node_modules` está gestionado desde Windows y reinstalar o modificarlo desde WSL puede romperlo (conflictos de `virtual-store-dir` de pnpm entre ambos sistemas).

Para verificar cambios visuales, el usuario ejecuta el servidor desde Windows y comprueba en el navegador. Usa `tsc --noEmit` para comprobación de tipos, que sí es seguro ejecutar desde WSL.
