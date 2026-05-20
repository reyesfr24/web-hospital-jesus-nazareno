// import fondo2 from '/img/portada2.jpeg';
import fondo2 from '/img/fondo2.jpg';

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
            linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 28%),
            linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 42%),
            linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)),
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
          justifyContent: 'flex-end',
          flex: 1,
          padding: '0 clamp(24px, 4vw, 48px)',
          minHeight: '100vh',
        }}
      >
        {/* ── Grid 2 columnas ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'stretch',
            paddingTop: '116px',
            gap: '40px',
          }}
          className="hero-grid"
        >
          {/* Columna izquierda: badge + H1 + CTAs + stats */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Badges */}
            <div style={{ marginBottom: '28px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
                    backgroundColor: '#D4C2FC',
                    flexShrink: 0,
                  }}
                />
                Fundado en 1819
              </span>
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
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4C2FC"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" fill="#D4C2FC" stroke="none" />
                </svg>
                Villanueva de Córdoba
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
                animation: 'hero-rise-in 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
              }}
            >
              Hospital de{' '}
              <span style={{ color: '#D4C2FC' }}>Jesús Nazareno</span>
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

            {/* Stats */}
            <div
              style={{
                paddingBottom: '36px',
                paddingTop: '24px',
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
                  <span style={{ color: '#D4C2FC', fontWeight: 700, fontSize: '0.875rem' }}>{stat.value}</span>
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem', marginTop: '2px' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: eslogan alineado al fondo */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: '36px' }}>
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
                animation: 'hero-rise-in 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both',
              }}
            >
              Más de 200 años
              <br />
              <span style={{ color: '#D4C2FC' }}>cuidando</span> con dignidad,
              <br />
              humanidad y amor cristiano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
