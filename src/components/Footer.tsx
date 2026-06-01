import logo from '../assets/logos/logo-transparente-alargado.png';

export default function Footer() {
  return (
    <footer
      id="contacto"
      style={{
        backgroundColor: '#1e1e2e',
        color: 'rgba(255,255,255,0.7)',
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 48px) clamp(32px, 4vw, 48px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(40px, 6vw, 64px)',
            marginBottom: 'clamp(48px, 6vw, 72px)',
          }}
        >
          {/* Brand column */}
          <div>
            <img
              src={logo}
              alt="Hospital de Jesús Nazareno"
              style={{ height: '44px', objectFit: 'contain', marginBottom: '20px', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, margin: '0 0 24px', maxWidth: '280px' }}>
              Más de 200 años cuidando con dignidad, humanidad y amor cristiano.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(172,247,193,0.15)',
                  color: '#D4C2FC',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                }}
              >
                Modelo ACP
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 20px' }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Inicio', 'Historia', 'Servicios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#D4C2FC')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 20px' }}>
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Dirección', value: 'Plaza Jesús Nazareno, s/n' },
                { label: 'Correo', value: 'info@hospitaljesusnazareno.es' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)' }}>{item.value}</div>
                </div>
              ))}

              {/* Phone pill button */}
              <div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  Teléfono
                </div>
                <a
                  href="tel:+34000000000"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    padding: '6px 6px 6px 18px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ color: '#1e1e2e', fontWeight: 500, fontSize: '0.9375rem', letterSpacing: '0.01em' }}>
                    +34 000 000 000
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#640679',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Hospital de Jesús Nazareno. Todos los derechos reservados.
          </p>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            Fundado en 1819 · Vocación cristiana de servicio
          </p>
        </div>
      </div>
    </footer>
  );
}
