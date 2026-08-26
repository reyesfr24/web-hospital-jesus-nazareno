import { navigate } from '../lib/navigation';

export default function PoliticaCookies() {
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
            Política de Cookies
          </h1>
          <p className="text-white/70 text-sm m-0">Última actualización: Febrero de 2026</p>
        </div>
      </div>

      {/* Body */}
      <div
        className="max-w-[820px] mx-auto px-[clamp(24px,4vw,48px)] py-[clamp(48px,7vw,72px)]"
        style={{ animation: 'hero-rise-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' }}
      >
        <div className="bg-bg-light rounded-2xl px-6 py-5 mb-10 flex flex-col gap-2">
          <p className="m-0 font-semibold text-brand text-base">¿Usamos cookies?</p>
          <p className="m-0 text-[0.9375rem] text-text-secondary">
            En la actualidad, el sitio web de Hospital de Jesús Nazareno <span className="font-semibold text-text-dark">NO</span> utiliza cookies ni tecnologías de seguimiento o almacenamiento de información en su dispositivo.
          </p>
          <p className="m-0 text-[0.9375rem] text-text-secondary">
            Nuestro sitio web funciona sin necesidad de almacenar datos en su navegador.
          </p>
        </div>

        {[
          {
            title: '¿Qué son las cookies?',
            paragraphs: [
              'Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador cuando los visita. Se utilizan para recordar sus preferencias, facilitar la navegación, mejorar la experiencia del usuario y analizar el comportamiento de los visitantes.',
              'En el caso de nuestro sitio web, no utilizamos ningún tipo de cookie, ni siquiera las técnicas necesarias para el funcionamiento básico del sitio.',
            ],
          },
          {
            title: 'Tipos de cookies (información general)',
            paragraphs: ['Aunque no las utilizamos, es importante conocer los tipos de cookies que existen:'],
            list: [
              { term: 'Cookies técnicas o necesarias', desc: 'Son imprescindibles para el funcionamiento del sitio web. Permiten la navegación y el uso de las diferentes opciones o servicios.' },
              { term: 'Cookies de análisis o medición', desc: 'Permiten medir y analizar el comportamiento de los usuarios para mejorar el sitio web. Ejemplo: Google Analytics.' },
              { term: 'Cookies de publicidad', desc: 'Permiten gestionar los espacios publicitarios y mostrar anuncios personalizados según sus intereses.' },
              { term: 'Cookies de personalización', desc: 'Permiten recordar información para que acceda al servicio con características que diferencian su experiencia (idioma, región, etc.).' },
            ],
          },
          {
            title: 'Almacenamiento local',
            paragraphs: [
              'Nuestro sitio web tampoco utiliza tecnologías de almacenamiento local como localStorage o sessionStorage para guardar información en su dispositivo.',
            ],
          },
          {
            title: 'Uso futuro de cookies',
            paragraphs: [
              'Si en el futuro decidimos implementar cookies (por ejemplo, para analizar el tráfico del sitio web y mejorar nuestros servicios), actualizaremos esta política de cookies y:',
            ],
            bullets: [
              'Le informaremos mediante un banner de consentimiento visible',
              'Solicitaremos su consentimiento previo y explícito',
              'Le permitiremos configurar qué tipos de cookies acepta',
              'Cumpliremos con el Reglamento General de Protección de Datos (RGPD) y la Ley de Servicios de la Sociedad de la Información (LSSI)',
            ],
          },
          {
            title: 'Sus derechos',
            paragraphs: [
              'Aunque actualmente no almacenamos ninguna información en su dispositivo, tiene derecho a conocer y controlar el uso de cookies en cualquier sitio web que visite. Puede configurar su navegador para:',
            ],
            bullets: [
              'Rechazar todas las cookies',
              'Permitir solo cookies de sitios de confianza',
              'Eliminar cookies después de cerrar el navegador',
              'Recibir notificaciones antes de aceptar cookies',
            ],
          },
          {
            title: 'Normativa aplicable',
            paragraphs: ['Esta política de cookies se rige por:'],
            bullets: [
              'Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD)',
              'Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE)',
              'Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)',
            ],
          },
        ].map((section) => (
          <div key={section.title} className="mb-9 last:mb-0">
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
            {'list' in section && section.list && (
              <div className="flex flex-col gap-4 mt-2">
                {section.list.map((item) => (
                  <div key={item.term}>
                    <p className="m-0 mb-1 font-semibold text-text-dark text-[0.9375rem]">{item.term}</p>
                    <p className="m-0 text-[0.9375rem] leading-[1.75] text-text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="mb-9">
          <h2 className="text-text-dark font-semibold text-lg tracking-[0.01em] m-0 mb-3">Contacto</h2>
          <p className="text-[0.9375rem] leading-[1.75] text-text-secondary m-0 mb-3">
            Para cualquier consulta sobre esta Política de Cookies o sobre el tratamiento de sus datos personales, puede contactar con nosotros:
          </p>
          <div className="bg-bg-light rounded-2xl px-6 py-5 flex flex-col gap-2">
            <p className="m-0 font-semibold text-brand text-base">Hospital de Jesús Nazareno</p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Dirección:</span> Calle Moreno de Pedrajas s/n, 14440 Villanueva de Córdoba (Córdoba)
            </p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Email:</span> jesusnazarenovillanueva@hotmail.com
            </p>
            <p className="m-0 text-[0.9375rem] text-text-secondary">
              <span className="font-semibold text-text-dark">Teléfono:</span> 601 623 400
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
