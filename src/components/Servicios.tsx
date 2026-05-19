const SERVICES = [
  {
    title: 'Psicología y Trabajo Social',
    description:
      'Escuchamos, acompañamos y respetamos los ritmos personales. Trabajamos desde la historia de vida, los valores y las preferencias de cada residente.',
    quote: '"ACP significa comprender antes de intervenir."',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Enfermería',
    description:
      'Seguimiento continuo del estado de salud, ajustando cuidados y medicación. Se prioriza el confort, la seguridad y la dignidad.',
    quote: '"La atención sanitaria también puede ser cercana y humana."',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    title: 'Fisioterapia',
    description:
      'Intervención individual teniendo en cuenta capacidades, deseos y objetivos. Fomento del movimiento funcional y prevención de caídas.',
    quote: '"En ACP, el objetivo es la calidad de vida."',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Terapia Ocupacional',
    description:
      'Actividades basadas en intereses, hábitos y roles previos, fomentando la participación activa y la toma de decisiones.',
    quote: '"La persona elige, participa y decide."',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
      </svg>
    ),
  },
  {
    title: 'Gerocultores y Cuidadores',
    description:
      'Atención diaria respetando preferencias, rutinas y tiempos personales. El vínculo humano y el trato cercano son la base del cuidado.',
    quote: '"Cuidar no es hacer por la persona, es hacer con ella."',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Cocina',
    description:
      'Alimentación adaptada a las necesidades de salud, pero también a los gustos, costumbres y preferencias personales.',
    quote: '"En ACP, la comida no es solo nutrición."',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.184 1.837 2.43v.601" />
      </svg>
    ),
  },
];

const DELAY_CLASSES = ['', 'delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5'];

export default function Servicios() {
  return (
    <section id="servicios" style={{ backgroundColor: '#F8F5FB' }}>
      <div style={{ padding: '0 clamp(24px, 4vw, 48px)' }}>

        {/* spacer-huge */}
        <div style={{ height: 'clamp(80px, 12vw, 160px)' }} />

        {/* Centered heading — mirrors section_home_services heading */}
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <p
            style={{
              margin: '0 0 16px',
              color: '#640679',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Atención Centrada en la Persona
          </p>
          <h2
            style={{
              margin: 0,
              color: '#1e1e2e',
              fontWeight: 600,
              fontSize: 'clamp(2.25rem, 7vw, 5.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Nuestros Servicios
          </h2>
          <div style={{ height: '24px' }} />
          <p
            style={{
              margin: '0 auto',
              color: '#757575',
              fontSize: '1.125rem',
              lineHeight: 1.75,
              maxWidth: '600px',
            }}
          >
            Cuidado integral y personalizado que respeta la historia de vida, los valores y las preferencias de cada residente.
          </p>
        </div>

        {/* spacer-xlarge */}
        <div style={{ height: 'clamp(48px, 6vw, 80px)' }} />

        {/* Services grid — mirrors home_services-list 2-column grid */}
        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll ${DELAY_CLASSES[i % 2]}`}
            >
              {/* Card — mirrors home_services-item: white bg, border-radius, padding, flex-column */}
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: 'clamp(28px, 3vw, 44px)',
                }}
              >
                {/* Icon — mirrors 52px SVG icons in reference */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: '#F8F5FB',
                    color: '#640679',
                    marginBottom: '24px',
                    flexShrink: 0,
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    margin: '0 0 12px',
                    color: '#1e1e2e',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description — mirrors text-color-secondary */}
                <p
                  style={{
                    margin: '0 0 24px',
                    color: '#757575',
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* Quote — accent blockquote */}
                <blockquote
                  style={{
                    margin: 0,
                    paddingLeft: '16px',
                    borderLeft: '3px solid #ACF7C1',
                    color: '#640679',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  {service.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* spacer-large */}
        <div style={{ height: 'clamp(48px, 6vw, 80px)' }} />

        {/* CTA button — mirrors home_services-button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            href="#contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 40px',
              borderRadius: '9999px',
              backgroundColor: '#640679',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease-out',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4a0559')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#640679')}
          >
            Contactar con nosotros
          </a>
        </div>

        {/* spacer-large */}
        <div style={{ height: 'clamp(80px, 12vw, 140px)' }} />
      </div>
    </section>
  );
}
