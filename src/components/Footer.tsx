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
              src="/logos/logo-transparente-alargado.png"
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
                  color: '#ACF7C1',
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
                    onMouseEnter={e => (e.currentTarget.style.color = '#ACF7C1')}
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
                { label: 'Teléfono', value: '+34 000 000 000' },
                { label: 'Correo', value: 'info@hospitaljesusnazareno.es' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)' }}>{item.value}</div>
                </div>
              ))}
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
