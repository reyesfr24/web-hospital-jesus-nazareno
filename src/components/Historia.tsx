const HL = ({ text }: { text: string }) => (
  <span style={{ color: '#640679', backgroundColor: 'rgba(212,194,252,0.25)', borderRadius: '6px', padding: '0 8px' }}>
    {text}
  </span>
);

export default function Historia() {
  return (
    <section id="historia" style={{ backgroundColor: '#ffffff' }}>
      <div style={{ padding: '0 clamp(24px, 4vw, 48px)' }}>

        {/* spacer-huge equivalent */}
        <div style={{ height: 'clamp(80px, 12vw, 50px)' }} />

        {/* Centered heading block — mirrors reference about section */}
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
            Desde 1819
          </p>
          <h2
            style={{
              margin: 0,
              color: '#1e1e2e',
              fontWeight: 600,
              fontSize: 'clamp(2.25rem, 6vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            <HL text="Nuestra Historia" />
          </h2>
          <div style={{ height: '24px' }} />
          <p
            style={{
              margin: '0 auto',
              color: '#757575',
              fontSize: '1.125rem',
              lineHeight: 1.75,
              maxWidth: '620px',
            }}
          >
            Más de dos siglos de vocación de servicio, guiados por la fe cristiana y el amor a los más necesitados.
          </p>
        </div>

        {/* spacer-huge */}
        <div style={{ height: 'clamp(60px, 8vw, 120px)' }} />

        {/* 2-column layout: text left + image right — mirrors home_about-content-2 */}
        <div className="historia-grid">
          {/* Left: text content */}
          <div className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            <div>
              <h3
                style={{
                  margin: '0 0 16px',
                  color: '#1e1e2e',
                  fontWeight: 600,
                  fontSize: 'clamp(1.375rem, 2.5vw, 2.275rem)',
                  lineHeight: 1.2,
                }}
              >
                <HL text="El origen cristiano" />
              </h3>
              <p style={{ margin: '0 0 16px', color: '#757575', lineHeight: 1.8, fontSize: '1.0625rem' }}>
                El Hospital de Jesús Nazareno tiene su origen en la figura de{' '}
                <strong style={{ color: '#303030', fontWeight: 600 }}>
                  don Bernardo Moreno de Pedrajas (1745–1818)
                </strong>
                , sacerdote y vicario de la parroquia de San Miguel Arcángel. En una época especialmente dura,
                caracterizada por crisis económicas, hambrunas y epidemias, don Bernardo entendió la caridad
                cristiana como una forma de vida.
              </p>
              <p style={{ margin: 0, color: '#757575', lineHeight: 1.8, fontSize: '1.0625rem' }}>
                Gracias a una gestión austera de su patrimonio, destinó sus bienes a aliviar el sufrimiento
                de los pobres, enfermos y desamparados. Esta vocación culminó en su testamento (1817–1818),
                donde dejó dispuesto el nacimiento del Hospital de Jesús Nazareno.
              </p>
            </div>

            <div>
              <h3
                style={{
                  margin: '0 0 16px',
                  color: '#1e1e2e',
                  fontWeight: 600,
                  fontSize: 'clamp(1.375rem, 2.5vw, 2.275rem)',
                  lineHeight: 1.2,
                }}
              >
                <HL text="Modernización y compromiso actual" />
              </h3>
              <p style={{ margin: '0 0 16px', color: '#757575', lineHeight: 1.8, fontSize: '1.0625rem' }}>
                Entre 1999 y 2007 se llevaron a cabo importantes obras de reforma que culminaron con la
                construcción del edificio actual, concebido para albergar una residencia de personas mayores
                con instalaciones modernas, accesibles y funcionales.
              </p>
              <p style={{ margin: 0, color: '#757575', lineHeight: 1.8, fontSize: '1.0625rem' }}>
                Hoy, el hospital sigue caminando fiel a su origen cristiano, implementando el modelo de{' '}
                <strong style={{ color: '#303030', fontWeight: 600 }}>
                  Atención Centrada en la Persona (ACP)
                </strong>
                , que sitúa a cada residente en el centro del cuidado, respetando sus gustos, preferencias,
                historia de vida y decisiones.
              </p>
            </div>
          </div>

          {/* Right: image — mirrors home_about-image */}
          <div className="animate-on-scroll delay-2" style={{ position: 'relative', maxWidth: '640px', marginLeft: 'auto' }}>
            {/* Accent block behind image */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                backgroundColor: '#998FC7',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                left: '-16px',
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: '#D4C2FC',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '3 / 4',
              }}
            >
              <img
                src="img/iglesia-interior.jpeg"
                alt="Cuidado con humanidad en el Hospital de Jesús Nazareno"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* spacer-huge */}
        <div style={{ height: 'clamp(80px, 12vw, 160px)' }} />
      </div>
    </section>
  );
}
