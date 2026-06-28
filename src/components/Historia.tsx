import iglesiaInterior from '../assets/images/iglesia-interior.webp';
import closeupHands from '../assets/images/closeup-support-hands.webp';

const HL = ({ text }: { text: string }) => (
  <span style={{ color: '#640679', backgroundColor: 'rgba(212,194,252,0.25)', borderRadius: '6px', padding: '0 8px' }}>
    {text}
  </span>
);

export default function Historia() {
  return (
    <section id="historia" style={{ backgroundColor: '#ffffff' }}>
      <div style={{ padding: '0 clamp(24px, 4vw, 48px)' }}>

        <div style={{ height: 'clamp(80px, 12vw, 50px)' }} />

        {/* Cabecera centrada */}
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

        <div style={{ height: 'clamp(60px, 8vw, 100px)' }} />

        {/* Grid unificado 2×2: las 4 celdas comparten el mismo grid → filas iguales */}
        <div className="historia-unified-grid">

          {/* Fila 1: imagen izquierda, card derecha */}
          <div className="historia-bloque-image animate-on-scroll">
            <img
              src={iglesiaInterior}
              alt="Interior de la iglesia del Hospital de Jesús Nazareno"
            />
          </div>
          <div className="historia-bloque-card animate-on-scroll delay-2">
            <h3 style={{ color: '#640679' }}>El origen cristiano</h3>
            <hr className="historia-divider" />
            <p>
              El Hospital de Jesús Nazareno tiene su origen en la figura de{' '}
              <strong style={{ color: '#303030', fontWeight: 600 }}>
                don Bernardo Moreno de Pedrajas (1745–1818)
              </strong>
              , sacerdote y vicario de la parroquia de San Miguel Arcángel. En una época especialmente dura,
              caracterizada por crisis económicas, hambrunas y epidemias, don Bernardo entendió la caridad
              cristiana como una forma de vida.
            </p>
            <p>
              Gracias a una gestión austera de su patrimonio, destinó sus bienes a aliviar el sufrimiento
              de los pobres, enfermos y desamparados. Esta vocación culminó en su testamento (1817–1818),
              donde dejó dispuesto el nacimiento del Hospital de Jesús Nazareno.
            </p>
          </div>

          {/* Fila 2: card izquierda, imagen derecha */}
          <div className="historia-bloque-card animate-on-scroll">
            <h3 style={{ color: '#640679' }}>Modernización y compromiso actual</h3>
            <hr className="historia-divider" />
            <p>
              Entre 1999 y 2007 se llevaron a cabo importantes obras de reforma que culminaron con la
              construcción del edificio actual, concebido para albergar una residencia de personas mayores
              con instalaciones modernas, accesibles y funcionales.
            </p>
            <p>
              Hoy, el hospital sigue caminando fiel a su origen cristiano, implementando el modelo de{' '}
              <strong style={{ color: '#303030', fontWeight: 600 }}>
                Atención Centrada en la Persona (ACP)
              </strong>
              , que sitúa a cada residente en el centro del cuidado, respetando sus gustos, preferencias,
              historia de vida y decisiones.
            </p>
          </div>
          <div className="historia-bloque-image animate-on-scroll delay-2">
            <img
              src={closeupHands}
              alt="Atención y cuidado a residentes del Hospital de Jesús Nazareno"
            />
          </div>

        </div>

        <div style={{ height: 'clamp(80px, 12vw, 160px)' }} />
      </div>
    </section>
  );
}
