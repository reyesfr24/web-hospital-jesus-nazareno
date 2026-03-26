# Web — Hospital Jesús Nazareno

> **Proyecto en desarrollo activo.** Actualmente en fase de construcción — no apto para producción.

Sitio web corporativo para el **Hospital Jesús Nazareno**, centro residencial para mayores. Desarrollado desde cero con foco en rendimiento, accesibilidad y posicionamiento SEO.

![Estado](https://img.shields.io/badge/Estado-En_desarrollo-orange)
![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![WCAG](https://img.shields.io/badge/Accesibilidad-WCAG_2.1_AA-16A34A)
![Licencia](https://img.shields.io/badge/Licencia-Privado-gray)

---

## Sobre el proyecto

El centro carecía de presencia digital. Este proyecto cubre el diseño y desarrollo completo del sitio web, incluyendo identidad de marca, sesión fotográfica, estrategia SEO y mantenimiento mensual de contenidos.

El objetivo principal es ofrecer a las familias toda la información que necesitan (servicios, instalaciones, proceso de admisión) de forma clara, accesible y con una imagen que transmita confianza.

---

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro](https://astro.build) — generación estática, cero JS por defecto |
| Estilos | [Tailwind CSS](https://tailwindcss.com) |
| Contenido | Astro Content Collections + Markdown |
| Formulario | [Formspree](https://formspree.io) |
| Hosting | Netlify / Vercel |

---

## Secciones del sitio

- **Inicio** — presentación del centro y acceso rápido a las secciones principales
- **Servicios** — catálogo completo: asistencia médica, enfermería 24h, fisioterapia, psicología, peluquería, podología y actividades
- **Instalaciones** — galería fotográfica de habitaciones, zonas comunes y jardines
- **Equipo** — presentación del equipo humano con foto y biografía
- **Proceso de admisión** — guía paso a paso con la documentación necesaria
- **Noticias** — publicaciones mensuales: residente del mes, actividades, consejos de salud y menú mensual
- **FAQ** — preguntas frecuentes sobre visitas, objetos permitidos, salidas, etc.
- **Contacto** — formulario de contacto y datos del centro

---

## Arrancar en local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo en http://localhost:4321
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

---

## Estructura del proyecto

```
/
├── public/
│   ├── menus/          # PDFs del menú mensual
│   └── fonts/
├── src/
│   ├── assets/         # Imágenes y recursos estáticos
│   ├── components/
│   │   ├── sections/   # Header, Footer y secciones de página
│   │   └── ui/         # Componentes reutilizables (Card, Badge, etc.)
│   ├── content/
│   │   └── noticias/   # Artículos en Markdown
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/          # Una página = un archivo .astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── tailwind.config.mjs
```

### Añadir una noticia

Crear un archivo `.md` en `src/content/noticias/` con el siguiente frontmatter:

```markdown
---
titulo: "Título de la noticia"
descripcion: "Breve descripción para el listado y el SEO."
fecha: 2026-03-15
categoria: actividades   # actividades | residente-del-mes | salud | cumpleanos | menu
imagen: /images/noticias/nombre-imagen.webp   # opcional
destacada: false
---

Contenido de la noticia en Markdown...
```

---

## Criterios de calidad

- Puntuación Lighthouse objetivo: **90+** en Performance, Accessibility, Best Practices y SEO
- Accesibilidad: **WCAG 2.1 nivel AA**
- Sin JavaScript en el cliente salvo donde sea imprescindible (menú móvil, acordeón FAQ)
- Imágenes en formato **WebP** con lazy loading y dimensiones explícitas

---

## Plan de trabajo

El plan completo de fases y tareas está en [`PlanDeTrabajo.md`](./PlanDeTrabajo.md).

---

*Proyecto privado — todos los derechos reservados.*
