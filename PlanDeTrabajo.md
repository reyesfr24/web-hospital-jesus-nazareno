# Plan de trabajo — Web Hospital Jesús Nazareno

---

## Fase 0 — Toma de requisitos y planificación

- [x] Estudio y planificación del stack tecnológico a utilizar
- [x] Inicializar proyecto Astro con Tailwind
- [x] Inicializar repositorio Git y configurar `.gitignore`
---

## Fase 1 — Identidad de marca

### Logo y Paleta de colores y tipografía

- [ ] Definir paleta definitiva (primario, secundario, neutros, estados de alerta)
- [ ] Analizar el logo actual e identificar qué conservar y qué rediseñar
- [ ] Rediseñar el nuevo logo en vectorial (Illustrator, Figma o Inkscape)
- [ ] Generar todas las variantes necesarias:
  - [ ] Versión completa (icono + nombre)
  - [ ] Solo icono (favicon, app icon)
  - [ ] Horizontal y vertical
  - [ ] Fondo claro / fondo oscuro / fondo transparente
- [ ] Exportar en todos los formatos: SVG, PNG (1x, 2x), WebP, ICO, PDF
- [ ] Seleccionar tipografía principal y secundaria (Google Fonts o fuente descargada)
- [x] Actualizar `tailwind.config.mjs` con los valores definitivos

### Usos corporativos adicionales

- [ ] Firma de correo electrónico
- [ ] Plantilla de comunicados / carta corporativa
- [ ] Tarjeta de visita (si se solicita)

---

## Fase 2 — Fotografía

### Planificación

- [ ] Definir listado completo de fotografías necesarias por sección (instalaciones, habitaciones, jardines, comedor, equipo, actividades)
- [ ] Coordinar fecha y horario con el centro (luz natural, actividad real)

### Sesión fotográfica

- [ ] Fotografías de exteriores e interior general del centro
- [ ] Habitaciones individuales y dobles
- [ ] Zonas comunes (salón, biblioteca, sala de TV)
- [ ] Jardines y zonas de paseo
- [ ] Comedor (preferiblemente en horario de servicio)
- [ ] Sala de fisioterapia y consulta médica
- [ ] Retratos del equipo (médico, dirección, enfermería jefe) con fondo neutro
- [ ] Fotografías ambientales de actividades y talleres
- [ ] Fotografías para el Hero de la home (gran formato, horizontal)

### Post-producción

- [ ] Selección y descarte de tomas
- [ ] Recorte y composición para cada uso (hero, tarjetas, galería)
- [ ] Optimización de peso: convertir a WebP, definir tamaños responsivos
- [ ] Organizar y nombrar archivos de forma coherente

---

## Fase 3 — SEO: investigación y estrategia

- [ ] Investigar palabras clave principales (ej: "residencia de mayores [ciudad]", "centro geriátrico [provincia]", "residencia para ancianos [zona]")
- [ ] Identificar intención de búsqueda para cada sección (informacional, transaccional, local)
- [ ] Analizar competidores directos en la zona: qué palabras usan, cómo estructuran sus webs
- [ ] Definir la keyword principal para cada página
- [ ] Decidir estrategia de SEO local (Google Business Profile, schema de organización, NAP consistente)
- [ ] Investigar snippets destacados y preguntas frecuentes reales (para la FAQ)
- [x] Definir estructura de metadatos: título, descripción y OG para cada página
- [ ] Planificar el blog/noticias como canal de contenido long-tail a largo plazo

---

## Fase 4 — Arquitectura y contenido

### Sitemap definitivo

- [x] Confirmar todas las páginas del sitio y sus URLs
- [ ] Decidir jerarquía de navegación (qué va en menú principal, qué en footer)
- [ ] Crear `sitemap.xml` y configurar en Astro

### Redacción de contenidos

- [ ] Home: titular, subtítulo, textos de secciones
- [ ] Servicios: descripción detallada de cada servicio
- [ ] Instalaciones: textos descriptivos de cada espacio
- [ ] Equipo: bio de cada profesional presentado
- [ ] Proceso de admisión: textos definitivos de cada paso y documentación
- [ ] FAQ: ampliar con preguntas reales del centro
- [ ] Contacto: datos reales (dirección, teléfono, email, horario)
- [ ] Aviso legal, política de privacidad y política de cookies (adaptar o encargar a asesor legal)

---

## Fase 5 — Desarrollo

### Setup y configuración

- [ ] Instalar `@astrojs/sitemap` y configurar generación automática
- [ ] Instalar `@astrojs/image` para optimización automática de imágenes
- [ ] Configurar variables de entorno para el ID de Formspree
- [ ] Añadir `robots.txt`
- [ ] Configurar fuentes web con `font-display: swap`

### Componentes UI reutilizables

- [ ] `Card.astro` — tarjeta genérica para servicios, equipo, noticias
- [ ] `Badge.astro` — etiqueta de categoría
- [ ] `SectionHeader.astro` — cabecera de sección con título y subtítulo
- [ ] `Image.astro` — wrapper con lazy loading y tamaños responsivos
- [ ] `Breadcrumb.astro` — migas de pan para páginas internas

### Páginas

- [x] Layout base con SEO y skip-nav
- [x] Header con menú responsive y menú móvil accesible
- [x] Footer
- [x] `/` — Home
- [x] `/servicios`
- [x] `/admision`
- [x] `/faq` — acordeón accesible
- [x] `/contacto` — formulario Formspree
- [x] `/noticias` — listado
- [x] `/noticias/[slug]` — página de artículo
- [ ] `/instalaciones` — galería con lightbox accesible
- [ ] `/equipo` — grid con foto y bio
- [ ] `/politica-privacidad`
- [ ] `/aviso-legal`
- [ ] `/cookies`
- [ ] `404.astro` — página de error personalizada

### Funcionalidades

- [ ] Formulario de contacto: mensaje de éxito/error tras envío
- [ ] Banner de cookies (RGPD) con aceptar/rechazar y persistencia en localStorage
- [ ] Botón "Volver arriba" para páginas largas
- [ ] Lightbox en galería de instalaciones
- [ ] Focus trap en menú móvil

### Integración de contenido real

- [ ] Sustituir todos los textos placeholder por contenido definitivo
- [ ] Insertar todas las fotografías optimizadas
- [ ] Añadir mapa de Google Maps embebido en `/contacto`
- [ ] Subir primer PDF de menú mensual a `/public/menus/`
- [ ] Configurar ID real de Formspree
- [ ] Actualizar URL del sitio en `astro.config.mjs`

---

## Fase 6 — Calidad, accesibilidad y rendimiento

### Accesibilidad (WCAG 2.1 AA)
- [x] Preparación de la estrucutra de código para que sea compatible WCAG 2.1 AA
- [ ] Verificar que todos los elementos interactivos son accesibles por teclado
- [ ] Comprobar ratio de contraste en toda la interfaz
- [ ] Auditar con Axe DevTools o WAVE
- [ ] Verificar que todas las imágenes tienen `alt` correcto (o vacío si son decorativas)
- [ ] Comprobar que el orden del DOM tiene sentido sin CSS
- [ ] Probar con lector de pantalla (NVDA o VoiceOver)

### Rendimiento

- [ ] Ejecutar Lighthouse en todas las páginas (objetivo: 90+ en Performance, Accessibility, Best Practices, SEO)
- [ ] Comprobar Core Web Vitals: LCP, CLS, INP
- [ ] Verificar que no hay imágenes sin dimensiones definidas (causa CLS)
- [ ] Comprobar que las fuentes no bloquean el renderizado
- [ ] Revisar que el CSS no tiene reglas sin usar

### SEO técnico

- [ ] Verificar que `<title>` y `<meta description>` son únicos en cada página
- [ ] Comprobar que las URLs son descriptivas y sin parámetros innecesarios
- [ ] Añadir datos estructurados (schema.org): `LocalBusiness`, `MedicalOrganization`, `FAQPage`
- [ ] Verificar canonical en todas las páginas
- [ ] Comprobar que el sitemap es correcto y accesible en `/sitemap-index.xml`
- [ ] Verificar que `robots.txt` no bloquea nada importante
- [ ] Comprobar Open Graph con Facebook Debugger o similares

### Pruebas en navegadores y dispositivos

- [ ] Chrome, Firefox, Safari, Edge
- [ ] Mobile (iOS Safari, Chrome Android)
- [ ] Tablets
- [ ] Pantallas grandes (> 1440px)

---

## Fase 7 — Hosting, dominio y despliegue

- [ ] Registrar el dominio definitivo
- [ ] Crear cuenta en Netlify (o Vercel)
- [ ] Conectar repositorio Git para despliegue automático en push
- [ ] Configurar dominio personalizado y certificado SSL
- [ ] Configurar redirects necesarios (`_redirects` en Netlify)
- [ ] Verificar que el deploy de producción funciona correctamente
- [ ] Comprobar que las variables de entorno están configuradas en el panel del hosting

---

## Fase 8 — Lanzamiento y post-lanzamiento

- [ ] Crear y verificar Google Business Profile del centro
- [ ] Dar de alta el sitio en Google Search Console
- [ ] Enviar el sitemap a Google Search Console
- [ ] Instalar Google Analytics 4 (o alternativa: Plausible, Fathom)
- [ ] Configurar objetivos/eventos en Analytics (clics en teléfono, envíos de formulario)
- [ ] Hacer una revisión final completa del sitio en producción
- [ ] Entregar accesos al cliente y documentar cómo añadir noticias
- [ ] Programar primera revisión de métricas (un mes después del lanzamiento)

---

## Fase 9 — Mantenimiento mensual (recurrente)

- [ ] Publicar noticia mensual (residente del mes, actividades, salud, cumpleaños)
- [ ] Actualizar PDF del menú mensual
- [ ] Revisar que los formularios de contacto funcionan y el correo llega correctamente
- [ ] Actualizar dependencias de Astro y paquetes npm
- [ ] Revisar métricas de Analytics y Search Console
- [ ] Comprobar que no hay errores en Google Search Console (cobertura, Core Web Vitals)
- [ ] Backup del repositorio

