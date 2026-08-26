import { navigate } from '../lib/navigation';

const FEATURES = [
  {
    title: 'Estructura Semántica',
    desc: 'Uso de HTML5 semántico con elementos header, nav, main, section, article, footer para facilitar la navegación con tecnologías de asistencia.',
  },
  {
    title: 'Landmarks ARIA',
    desc: 'Roles ARIA (banner, navigation, main, contentinfo) y etiquetas aria-label / aria-labelledby en todas las secciones principales.',
  },
  {
    title: 'Navegación por Teclado',
    desc: 'Todos los elementos interactivos son accesibles mediante teclado con orden de tabulación lógico. Indicador de foco visible (anillo morado de 3px) en todos los enlaces y botones.',
  },
  {
    title: 'Texto Alternativo',
    desc: 'Todas las imágenes informativas cuentan con atributos alt descriptivos. Los iconos decorativos usan aria-hidden="true" para evitar redundancia.',
  },
  {
    title: 'Contraste de Color',
    desc: 'Todos los textos y elementos de interfaz cumplen con ratios de contraste WCAG AA: ≥4.5:1 para texto normal, ≥3:1 para componentes de UI.',
  },
  {
    title: 'Ampliación de Texto',
    desc: 'El sitio permanece legible y funcional con zoom de hasta 200% sin pérdida de contenido o funcionalidad, y es usable hasta 400%.',
  },
  {
    title: 'Idioma Declarado',
    desc: 'El idioma principal del sitio (es-ES) está correctamente declarado en el elemento <html>.',
  },
  {
    title: 'Área Táctil Suficiente',
    desc: 'Todos los elementos interactivos en móvil cumplen con el tamaño mínimo de 44×44 píxeles para facilitar la interacción táctil.',
  },
  {
    title: 'Diseño Responsive',
    desc: 'Adaptación completa a dispositivos móviles, tablets y escritorio con diseño mobile-first y puntos de ruptura responsivos.',
  },
];

const SECTIONS = [
  {
    title: 'Nivel de Conformidad',
    paragraphs: [
      'Este sitio web es plenamente conforme con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 nivel AA.',
      'Plenamente conforme significa que el contenido cumple íntegramente con todos los criterios de conformidad del nivel AA sin excepciones.',
    ],
  },
  {
    title: 'Tecnologías Utilizadas',
    paragraphs: ['Las siguientes tecnologías se emplean para garantizar la accesibilidad de este sitio web:'],
    bullets: [
      'HTML5: Marcado semántico para estructura de contenido',
      'CSS3: Estilos y presentación visual accesible',
      'WAI-ARIA 1.2: Atributos de accesibilidad para tecnologías de asistencia',
      'Astro 5.17.1: Framework de sitio estático optimizado',
      'JavaScript: Mejoras progresivas sin dependencias críticas',
    ],
  },
  {
    title: 'Método de Evaluación',
    paragraphs: ['La conformidad con WCAG 2.1 nivel AA se ha verificado mediante:'],
    groups: [
      {
        heading: 'Herramientas Automáticas',
        bullets: [
          'WAVE (WebAIM): Evaluación de estructura y etiquetas ARIA',
          'Lighthouse (Google Chrome DevTools): Auditoría integral de accesibilidad',
          'axe DevTools: Detección de violaciones WCAG automáticas',
          'W3C HTML Validator: Validación de marcado semántico',
        ],
      },
      {
        heading: 'Pruebas Manuales',
        bullets: [
          'Navegación por teclado: Verificación de orden lógico y visibilidad de foco',
          'Lectores de pantalla: Pruebas con NVDA (Windows) y VoiceOver (macOS/iOS)',
          'Ampliación de texto: Zoom hasta 200% sin pérdida de funcionalidad',
          'Contraste de color: Verificación de ratios WCAG AA (≥4.5:1 texto, ≥3:1 UI)',
        ],
      },
    ],
  },
  {
    title: 'Estado de Cumplimiento',
    paragraphs: [
      'Situación: Plenamente conforme con WCAG 2.1 nivel AA',
      'Fecha de la evaluación: 10 de febrero de 2026',
      'Este sitio web cumple con todos los criterios de conformidad de nivel A y AA de las WCAG 2.1, sin excepciones ni contenido no accesible identificado.',
    ],
  },
  {
    title: 'Contenido No Accesible',
    paragraphs: ['En la actualidad, no se han identificado contenidos inaccesibles en este sitio web.'],
  },
  {
    title: 'Excepciones',
    paragraphs: [
      'En caso de utilizar servicios de terceros (mapas interactivos, widgets de redes sociales, etc.), la accesibilidad de dichos componentes depende del proveedor externo. Nos esforzamos por seleccionar proveedores que cumplan con estándares de accesibilidad.',
    ],
  },
];

const COMPROMISO_BULLETS = [
  'Revisiones periódicas de accesibilidad con herramientas automáticas y pruebas manuales',
  'Formación continua del equipo responsable del sitio web en materia de accesibilidad',
  'Actualización de esta declaración de accesibilidad ante cualquier cambio relevante',
  'Consideración de las sugerencias y comentarios de usuarios para mejorar la experiencia de todas las personas',
  'Cumplimiento de las actualizaciones normativas en materia de accesibilidad web',
];

const REFERENCIAS_GROUPS = [
  {
    heading: 'Normativa Europea y Española',
    bullets: [
      'Directiva (UE) 2016/2102 del Parlamento Europeo y del Consejo - Accesibilidad de sitios web del sector público',
      'Directiva (UE) 2019/882 - European Accessibility Act (vigente desde 2025 para sector privado)',
      'Real Decreto 1112/2018, de 7 de septiembre - Accesibilidad de sitios web y aplicaciones del sector público',
      'Real Decreto 193/2023, de 21 de marzo - Extensión de requisitos de accesibilidad al sector privado desde enero 2026',
      'Norma UNE-EN 301549:2021 - Requisitos de accesibilidad para productos y servicios TIC',
    ],
  },
  {
    heading: 'Estándares Técnicos Internacionales',
    bullets: [
      'WCAG 2.1 (Web Content Accessibility Guidelines) nivel AA - W3C (junio 2018)',
      'WCAG 2.2 nivel AA - W3C (octubre 2023) - Mejores prácticas 2026',
      'WAI-ARIA 1.2 - Accessible Rich Internet Applications (W3C)',
    ],
  },
];

function InfoBox({ children }: { children: React.ReactNode }) {
  return <div className="bg-bg-light rounded-2xl px-6 py-5 flex flex-col gap-2">{children}</div>;
}

export default function Accesibilidad() {
  return (
    <div>
      {/* Header */}
      <div className="footer-mesh-gradient-2 px-[clamp(24px,4vw,48px)] pt-[clamp(28px,4vw,36px)] pb-[clamp(32px,5vw,48px)]">
        <div
          className="max-w-[820px] mx-auto"
          style={{ animation: 'hero-rise-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both' }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="inline-flex items-center gap-1.5 text-white/80 no-underline text-sm font-medium mb-8 px-4 py-2 rounded-full border border-white/25 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <span aria-hidden="true">←</span> Volver al inicio
          </a>
          <h1 className="text-white text-[clamp(1.75rem,4vw,2.5rem)] font-semibold m-0 mb-3">
            Accesibilidad
          </h1>
          <p className="text-white/70 text-sm m-0">Última actualización: 10 de febrero de 2026</p>
        </div>
      </div>

      {/* Body */}
      <div
        className="max-w-[820px] mx-auto px-[clamp(24px,4vw,48px)] py-[clamp(48px,7vw,72px)]"
        style={{ animation: 'hero-rise-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' }}
      >
        <div className="mb-9">
          <h2 className="text-text-dark font-semibold text-lg tracking-[0.01em] m-0 mb-3">
            Datos Identificativos
          </h2>
          <InfoBox>
            <p className="m-0 font-semibold text-brand text-base">Fundación Hospital de Jesús Nazareno</p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">NIF:</span> G14019095
            </p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Dirección:</span> C/ Moreno de Pedrajas s/n, 14440 Villanueva de Córdoba (Córdoba)
            </p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Teléfono:</span> 601 623 400
            </p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Email:</span> jesusnazarenovillanueva@hotmail.com
            </p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Sitio web:</span> www.hospitaljesusnazarenovillanueva.es
            </p>
          </InfoBox>
        </div>

        {SECTIONS.map((section) => (
          <div key={section.title} className="mb-9">
            <h2 className="text-text-dark font-semibold text-lg tracking-[0.01em] m-0 mb-3">
              {section.title}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-[0.9375rem] leading-[1.75] text-text-secondary m-0 mb-3 last:mb-0">
                {p}
              </p>
            ))}
            {'bullets' in section && section.bullets && (
              <ul className="m-0 mt-1 pl-5 flex flex-col gap-2">
                {section.bullets.map((b) => (
                  <li key={b} className="text-[0.9375rem] leading-[1.7] text-text-secondary">
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {'groups' in section && section.groups && (
              <div className="flex flex-col gap-5 mt-2">
                {section.groups.map((group) => (
                  <div key={group.heading}>
                    <p className="m-0 mb-2 font-semibold text-text-dark text-[0.9375rem]">{group.heading}</p>
                    <ul className="m-0 pl-5 flex flex-col gap-2">
                      {group.bullets.map((b) => (
                        <li key={b} className="text-[0.9375rem] leading-[1.7] text-text-secondary">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Características de Accesibilidad Implementadas */}
        <div className="mb-9">
          <h2 className="text-text-dark font-semibold text-lg tracking-[0.01em] m-0 mb-5">
            Características de Accesibilidad Implementadas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="bg-bg-light rounded-2xl px-5 py-4">
                <p className="m-0 mb-1.5 flex items-center gap-2 font-semibold text-text-dark text-[0.9375rem]">
                  <span aria-hidden="true" className="text-brand">✓</span>
                  {feature.title}
                </p>
                <p className="m-0 text-[0.875rem] leading-[1.65] text-text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="mb-9">
          <h2 className="text-text-dark font-semibold text-lg tracking-[0.01em] m-0 mb-3">
            Mecanismo de Contacto para Incidencias de Accesibilidad
          </h2>
          <p className="text-[0.9375rem] leading-[1.75] text-text-secondary m-0 mb-3">
            Si encuentra alguna barrera de accesibilidad en este sitio web o desea solicitar información en formato alternativo, puede contactarnos a través de los siguientes medios:
          </p>
          <InfoBox>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Email:</span> jesusnazarenovillanueva@hotmail.com
            </p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Teléfono:</span> 601 623 400
            </p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Dirección:</span> C/ Moreno de Pedrajas s/n, 14440 Villanueva de Córdoba (Córdoba)
            </p>
          </InfoBox>
          <p className="text-[0.9375rem] leading-[1.75] text-text-secondary m-0 mt-4">
            <span className="font-semibold text-text-dark">Plazo de respuesta:</span> Nos comprometemos a responder a cualquier solicitud relacionada con la accesibilidad de este sitio web en un plazo máximo de 20 días hábiles desde la recepción de la comunicación.
          </p>
        </div>

        {/* Procedimiento de Aplicación */}
        <div className="mb-9">
          <h2 className="text-text-dark font-semibold text-lg tracking-[0.01em] m-0 mb-3">
            Procedimiento de Aplicación
          </h2>
          <p className="text-[0.9375rem] leading-[1.75] text-text-secondary m-0 mb-3">
            En cumplimiento del artículo 10 del Real Decreto 1112/2018, si tras contactar con nosotros no queda satisfecho con la respuesta recibida o considera que no se ha atendido adecuadamente su solicitud, puede:
          </p>
          <ul className="m-0 mb-4 pl-5 flex flex-col gap-2">
            <li className="text-[0.9375rem] leading-[1.7] text-text-secondary">
              Enviar una queja formal a través de los canales de contacto indicados anteriormente, identificando claramente la incidencia de accesibilidad detectada.
            </li>
            <li className="text-[0.9375rem] leading-[1.7] text-text-secondary">
              Presentar una reclamación ante el Defensor del Pueblo, de acuerdo con lo establecido en la Ley 36/2015, de 28 de septiembre.
            </li>
          </ul>
          <InfoBox>
            <p className="m-0 font-semibold text-brand text-base">Defensor del Pueblo</p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">C/ Zurbano, 42 - 28010 Madrid</p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Teléfono:</span> 900 10 10 25
            </p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Web:</span> www.defensordelpueblo.es
            </p>
          </InfoBox>
        </div>

        {/* Compromiso de Mejora Continua */}
        <div className="mb-9">
          <h2 className="text-text-dark font-semibold text-lg tracking-[0.01em] m-0 mb-3">
            Compromiso de Mejora Continua
          </h2>
          <p className="text-[0.9375rem] leading-[1.75] text-text-secondary m-0 mb-3">
            La Fundación Hospital de Jesús Nazareno se compromete a mantener y mejorar la accesibilidad de este sitio web de forma continua, mediante:
          </p>
          <ul className="m-0 pl-5 flex flex-col gap-2">
            {COMPROMISO_BULLETS.map((b) => (
              <li key={b} className="text-[0.9375rem] leading-[1.7] text-text-secondary">
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Referencias Legales y Normativas */}
        <div>
          <h2 className="text-text-dark font-semibold text-lg tracking-[0.01em] m-0 mb-3">
            Referencias Legales y Normativas
          </h2>
          <p className="text-[0.9375rem] leading-[1.75] text-text-secondary m-0 mb-4">
            Esta declaración de accesibilidad se basa en las siguientes normativas y estándares:
          </p>
          <div className="flex flex-col gap-5">
            {REFERENCIAS_GROUPS.map((group) => (
              <div key={group.heading}>
                <p className="m-0 mb-2 font-semibold text-text-dark text-[0.9375rem]">{group.heading}</p>
                <ul className="m-0 pl-5 flex flex-col gap-2">
                  {group.bullets.map((b) => (
                    <li key={b} className="text-[0.9375rem] leading-[1.7] text-text-secondary">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] leading-[1.75] text-text-secondary m-0 mt-4">
            Para más información sobre accesibilidad web, visite el Web Accessibility Initiative (WAI) del W3C.
          </p>
        </div>
      </div>
    </div>
  );
}
