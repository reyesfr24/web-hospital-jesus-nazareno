import { useInView } from '../hooks/useInView';

const galeria = [
  {
    titulo: 'Habitaciones',
    subtitulo: 'Espacios privados y confortables',
    gradient: 'linear-gradient(135deg, #1e0f28 0%, #640679 100%)',
    span: 'col-span-1 row-span-1',
  },
  {
    titulo: 'Salones de Actividades',
    subtitulo: 'Espacios para vivir y compartir',
    gradient: 'linear-gradient(135deg, #2d0a3a 0%, #998FC7 80%, #c4bde0 100%)',
    span: 'col-span-1 row-span-2',
  },
  {
    titulo: 'Sala de Fisioterapia',
    subtitulo: 'Equipamiento profesional moderno',
    gradient: 'linear-gradient(135deg, #0f0416 0%, #3d1050 100%)',
    span: 'col-span-1 row-span-1',
  },
  {
    titulo: 'Jardines y Exteriores',
    subtitulo: 'Conexión con la naturaleza',
    gradient: 'linear-gradient(135deg, #1a4a20 0%, #ACF7C1 80%, #7ed49a 100%)',
    span: 'col-span-1 row-span-1',
  },
  {
    titulo: 'Comedor',
    subtitulo: 'Alimentación con cariño',
    gradient: 'linear-gradient(135deg, #3d1050 0%, #640679 60%, #8a0fa0 100%)',
    span: 'col-span-1 row-span-1',
  },
  {
    titulo: 'Zona de Descanso',
    subtitulo: 'Tranquilidad y bienestar',
    gradient: 'linear-gradient(135deg, #0f0416 0%, #1e0f28 50%, #2d0a3a 100%)',
    span: 'col-span-1 row-span-1',
  },
];

export default function Galeria() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="instalaciones"
      style={{ backgroundColor: '#f5f0f7' }}
      className="py-24 lg:py-32"
    >
      <div className="max-w-[88rem] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={sectionRef}
          className="grid lg:grid-cols-2 gap-8 items-end mb-14"
        >
          <div>
            <div className={`mb-4 ${inView ? 'animate-fadeInLeft' : 'opacity-0-init'}`}>
              <span className="section-tag-light">Nuestras Instalaciones</span>
            </div>
            <h2
              className={`heading-display ${inView ? 'animate-fadeInLeft delay-100' : 'opacity-0-init'}`}
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', color: '#0f0416' }}
            >
              Espacios pensados
              <br />
              <em>para el bienestar.</em>
            </h2>
          </div>
          <p
            className={`leading-relaxed lg:text-right ${inView ? 'animate-fadeInRight delay-200' : 'opacity-0-init'}`}
            style={{ color: '#54514c', fontSize: '1.05rem', lineHeight: '1.7' }}
          >
            Instalaciones modernas, accesibles y funcionales, concebidas
            para garantizar la comodidad y la dignidad de cada residente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] lg:auto-rows-[220px]">
          {galeria.map((item, i) => (
            <div
              key={item.titulo}
              className={`gallery-card ${item.span} ${inView ? 'animate-scaleIn' : 'opacity-0-init'}`}
              style={{
                animationDelay: inView ? `${i * 0.07}s` : '0s',
                animationFillMode: 'forwards',
                background: item.gradient,
              }}
            >
              <div className="gallery-card-overlay" />

              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Replace placeholder text */}
              <div className="absolute top-4 right-4">
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    background: 'rgb(255 255 255 / 0.1)',
                    border: '1px solid rgb(255 255 255 / 0.15)',
                    color: 'rgb(255 255 255 / 0.5)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Foto próximamente
                </span>
              </div>

              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-semibold text-sm lg:text-base mb-0.5">
                  {item.titulo}
                </h3>
                <p className="text-white/50 text-xs">{item.subtitulo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip (like Alveora's case study stats) */}
        <div
          className={`mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden ${inView ? 'animate-fadeInUp delay-500' : 'opacity-0-init'}`}
          style={{ background: 'rgb(100 6 121 / 0.1)', border: '1px solid rgb(100 6 121 / 0.15)' }}
        >
          {[
            { value: '2007', label: 'Año del edificio actual' },
            { value: '100%', label: 'Accesibilidad' },
            { value: 'ACP', label: 'Modelo de atención' },
            { value: '24/7', label: 'Atención continua' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 p-5"
              style={{ background: '#f5f0f7' }}
            >
              <span
                className="font-display"
                style={{ fontSize: '1.75rem', color: '#640679', lineHeight: '1', letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider" style={{ color: '#9f9e9e' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
