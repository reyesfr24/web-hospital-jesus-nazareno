import fondo2 from '/img/portada2.jpeg';

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#640679',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background image + gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18)),
            linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.62)),
            url('${fondo2}')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Content wrapper */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '0 clamp(24px, 4vw, 48px)',
          minHeight: '100vh',
        }}
      >
        {/* ── Centro: grid 2 columnas ── */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            paddingTop: '116px',
            gap: '40px',
          }}
          className="hero-grid"
        >
          {/* Columna izquierda: badge + H1 + CTAs */}
          <div>
            {/* Badge */}
            <div style={{ marginBottom: '28px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(8px)',
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#ACF7C1',
                    flexShrink: 0,
                  }}
                />
                Fundado en 1819
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                margin: '0 0 32px',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: 'clamp(2.25rem, 4vw, 4rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
              }}
            >
              Hospital de{' '}
              <span style={{ color: '#ACF7C1' }}>Jesús Nazareno</span>
            </h1>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a
                href="#historia"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '13px 32px',
                  borderRadius: '9999px',
                  backgroundColor: '#640679',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease-out',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Conocer más
              </a>
              <a
                href="#servicios"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '13px 32px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  color: '#640679',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease-out',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Nuestros servicios
              </a>
            </div>
          </div>

          {/* Columna derecha: eslogan con protagonismo */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p
              style={{
                margin: 0,
                color: '#ffffff',
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                textAlign: 'right',
                maxWidth: '520px',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              Más de 200 años
              <br />
              <span style={{ color: '#ACF7C1' }}>cuidando</span> con dignidad,
              <br />
              humanidad y amor cristiano
            </p>
          </div>
        </div>

        {/* ── Pie: badges de stats ── */}
        <div
          style={{
            paddingBottom: '56px',
            paddingTop: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {[
            { value: '+200 años', label: 'de historia' },
            { value: 'Modelo ACP', label: 'centrado en la persona' },
            { value: 'Amor cristiano', label: 'en cada cuidado' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '12px 18px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <span style={{ color: '#ACF7C1', fontWeight: 700, fontSize: '0.875rem' }}>{stat.value}</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem', marginTop: '2px' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
