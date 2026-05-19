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
      {/* Background image + dual gradient overlay — mirrors reference site structure */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(100, 6, 121, 0.35), rgba(100, 6, 121, 0.35)),
            linear-gradient(rgba(100, 6, 121, 0) 45%, rgba(0, 0, 0, 0.68)),
            url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=80')
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
        {/* Main content — top/center */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
          <div style={{ width: '100%', maxWidth: '680px' }}>

            {/* Year badge */}
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
                fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
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

            {/* Stat badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '40px' }}>
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
        </div>

        {/* Bottom tagline — mirrors reference site's body-text bottom-left */}
        <div style={{ paddingBottom: '64px', paddingTop: '48px' }}>
          <p
            style={{
              margin: 0,
              color: 'rgba(255,255,255,0.88)',
              fontWeight: 500,
              fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
              maxWidth: '560px',
              lineHeight: 1.45,
            }}
          >
            Más de 200 años cuidando con dignidad,
            <br />
            humanidad y amor cristiano
          </p>
        </div>
      </div>
    </section>
  );
}
