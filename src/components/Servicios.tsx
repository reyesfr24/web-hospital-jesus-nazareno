import { useInView } from '../hooks/useInView';

interface Servicio {
  nombre: string;
  descripcion: string;
  cita: string;
  tags: [string, string, string];
  icon: string;
}

const servicios: Servicio[] = [
  {
    nombre: 'Psicología y Trabajo Social.',
    descripcion: 'Acompañamiento emocional y social desde la historia de vida, los valores y las preferencias de cada residente.',
    cita: '"ACP significa comprender antes de intervenir."',
    tags: ['Apoyo emocional', 'Historia de vida', 'Bienestar integral'],
    icon: '◎',
  },
  {
    nombre: 'Enfermería.',
    descripcion: 'Seguimiento continuo del estado de salud, ajustando cuidados y medicación. Se prioriza el confort, la seguridad y la dignidad.',
    cita: '"La atención sanitaria también puede ser cercana y humana."',
    tags: ['Seguimiento continuo', 'Confort y seguridad', 'Cuidado digno'],
    icon: '◉',
  },
  {
    nombre: 'Fisioterapia.',
    descripcion: 'Intervención individual teniendo en cuenta capacidades, deseos y objetivos. Fomento del movimiento funcional.',
    cita: '"En ACP, el objetivo es la calidad de vida."',
    tags: ['Intervención individual', 'Movimiento funcional', 'Prevención de caídas'],
    icon: '◈',
  },
  {
    nombre: 'Terapia Ocupacional.',
    descripcion: 'Actividades basadas en intereses, hábitos y roles previos, fomentando la participación activa y la toma de decisiones.',
    cita: '"La persona elige, participa y decide."',
    tags: ['Intereses personales', 'Participación activa', 'Autonomía'],
    icon: '◇',
  },
  {
    nombre: 'Gerocultores y Cuidadores.',
    descripcion: 'Atención diaria respetando preferencias, rutinas y tiempos personales. El vínculo humano es la base del cuidado.',
    cita: '"Cuidar no es hacer por la persona, es hacer con ella."',
    tags: ['Atención diaria', 'Vínculo humano', 'Trato cercano'],
    icon: '◬',
  },
  {
    nombre: 'Cocina.',
    descripcion: 'Alimentación adaptada a necesidades de salud, pero también a los gustos, costumbres y preferencias personales.',
    cita: '"En ACP, la comida no es solo nutrición."',
    tags: ['Nutrición adaptada', 'Gustos personales', 'Bienestar alimentario'],
    icon: '◰',
  },
];

export default function Servicios() {
  const { ref: sectionRef, inView } = useInView(0.08);
  const { ref: listRef, inView: listInView } = useInView(0.05);

  return (
    <section
      id="servicios"
      style={{ backgroundColor: '#0f0416' }}
      className="py-24 lg:py-32"
    >
      <div className="max-w-[88rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">

          {/* LEFT — Header (sticky on desktop) */}
          <div
            ref={sectionRef}
            className="lg:sticky lg:top-32 flex flex-col gap-6"
          >
            <div className={inView ? 'animate-fadeInLeft' : 'opacity-0-init'}>
              <span className="section-tag-dark">Nuestros Servicios</span>
            </div>

            <h2
              className={`heading-display text-white ${inView ? 'animate-fadeInLeft delay-100' : 'opacity-0-init'}`}
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Atención Centrada
              <br />
              <em>en la Persona.</em>
            </h2>

            <p
              className={`leading-relaxed ${inView ? 'animate-fadeInLeft delay-200' : 'opacity-0-init'}`}
              style={{ color: 'rgb(255 255 255 / 0.55)', fontSize: '1rem', lineHeight: '1.7' }}
            >
              Cuidado profesional que respeta la historia de vida,
              los gustos, preferencias y decisiones de cada residente.
            </p>

            <div className={`${inView ? 'animate-fadeInLeft delay-300' : 'opacity-0-init'}`}>
              <a href="#contacto" className="btn-primary">
                Solicitar información
              </a>
            </div>

            {/* Decorative counter */}
            <div
              className={`mt-4 pt-6 border-t ${inView ? 'animate-fadeInLeft delay-400' : 'opacity-0-init'}`}
              style={{ borderColor: 'rgb(255 255 255 / 0.08)' }}
            >
              <p
                className="font-display text-white/10"
                style={{ fontSize: '5rem', lineHeight: '1', letterSpacing: '-0.04em' }}
              >
                06
              </p>
              <p className="text-white/30 text-xs uppercase tracking-widest -mt-2">
                Áreas de cuidado
              </p>
            </div>
          </div>

          {/* RIGHT — Service list */}
          <div ref={listRef}>
            {servicios.map((s, i) => (
              <div
                key={s.nombre}
                className={`service-item ${listInView ? `animate-fadeInRight` : 'opacity-0-init'}`}
                style={{
                  animationDelay: listInView ? `${i * 0.08}s` : '0s',
                  animationFillMode: 'forwards',
                }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    {/* Name */}
                    <h3
                      className="font-display text-white mb-3"
                      style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', fontWeight: 400, lineHeight: 1.2 }}
                    >
                      {s.nombre}
                    </h3>

                    {/* Tags row (like Alveora's metadata pills) */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                          style={{
                            background: 'rgb(255 255 255 / 0.05)',
                            border: '1px solid rgb(255 255 255 / 0.08)',
                            color: 'rgb(255 255 255 / 0.5)',
                          }}
                        >
                          <span className="w-1 h-1 rounded-full bg-secondary/60 inline-block flex-shrink-0" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p
                      className="italic"
                      style={{ color: '#998FC7', fontSize: '0.875rem' }}
                    >
                      {s.cita}
                    </p>
                  </div>

                  {/* Icon */}
                  <span
                    className="text-2xl flex-shrink-0 mt-1"
                    style={{ color: 'rgb(100 6 121 / 0.4)' }}
                  >
                    {s.icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
