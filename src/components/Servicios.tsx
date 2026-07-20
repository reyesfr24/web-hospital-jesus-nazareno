const SERVICES = [
  {
    title: 'Psicología y Trabajo Social',
    description:
      'Escuchamos, acompañamos y respetamos los ritmos personales. Trabajamos desde la historia de vida, los valores y las preferencias de cada residente.',
    features: ['Historia de vida', 'Acompañamiento emocional', 'Apoyo a familias'],
  },
  {
    title: 'Enfermería',
    description:
      'Seguimiento continuo del estado de salud, ajustando cuidados y medicación. Se prioriza el confort, la seguridad y la dignidad.',
    features: ['Control de medicación', 'Vigilancia continua', 'Gestión de curas'],
  },
  {
    title: 'Fisioterapia',
    description:
      'Intervención individual teniendo en cuenta capacidades, deseos y objetivos. Fomento del movimiento funcional y prevención de caídas.',
    features: ['Rehabilitación funcional', 'Prevención de caídas', 'Ejercicio terapéutico'],
  },
  {
    title: 'Terapia Ocupacional',
    description:
      'Actividades basadas en intereses, hábitos y roles previos, fomentando la participación activa y la toma de decisiones.',
    features: ['Actividades personalizadas', 'Autonomía y decisión', 'Estimulación cognitiva'],
  },
  {
    title: 'Gerocultores y Cuidadores',
    description:
      'Atención diaria respetando preferencias, rutinas y tiempos personales. El vínculo humano y el trato cercano son la base del cuidado.',
    features: ['Respeto a rutinas personales', 'Trato cercano y humano', 'Cuidado con dignidad'],
  },
  {
    title: 'Cocina',
    description:
      'Alimentación adaptada a las necesidades de salud, pero también a los gustos, costumbres y preferencias personales.',
    features: ['Menús personalizados', 'Dietas terapéuticas', 'Sabores y tradición'],
  },
];


export default function Servicios() {
  return (
    <section id="servicios" className="bg-[#F9F5FF]">
      <div className="px-[clamp(24px,4vw,48px)]">

        <div className="h-[clamp(80px,12vw,80px)]" />

        {/* Cabecera centrada */}
        <div className="animate-on-scroll text-center">
          <p className="m-0 mb-4 text-brand text-[0.8125rem] font-semibold tracking-[0.12em] uppercase">
            Atención Centrada en la Persona
          </p>
          <h2 className="m-0 text-text-dark font-semibold text-[clamp(2.25rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.02em]">
            Nuestros Servicios
          </h2>
          <div className="h-6" />
          <p className="m-0 mx-auto text-[#757575] text-lg leading-[1.75] max-w-[600px]">
            Cuidado integral y personalizado que respeta la historia de vida, los valores y las preferencias de cada residente.
          </p>
        </div>

        <div className="h-[clamp(48px,6vw,80px)]" />

        {/* Lista de servicios */}
        <div className="animate-on-scroll flex flex-col gap-3 max-w-[1200px] mx-auto">
          {SERVICES.map((service) => (
            <div key={service.title} className="rounded-[32px] bg-white shadow-[0_16px_40px_-16px_rgba(100,6,121,0.25)]">
              <div className="flex items-center gap-6 lg:gap-12 px-7 py-8 md:px-10 md:py-9">
                {/* Title */}
                <h3 className="m-0 flex-1 min-w-0 truncate text-text-dark font-bold text-[1.375rem] md:text-[1.75rem] lg:text-[2rem] leading-[1.2] tracking-[-0.01em]">
                  {service.title}
                </h3>

                {/* Description preview (desktop only) */}
                <p className="hidden lg:block w-[380px] xl:w-[420px] shrink-0 m-0 text-[#757575] text-base leading-[1.6]">
                  {service.description}
                </p>

                {/* Decorative icon */}
                <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shrink-0 bg-[#F3EEFA] text-brand">
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                    <path d="M9 14V4m0 0L4 9m5-5l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className="px-7 md:px-10 pb-8 md:pb-9 pt-0">
                {/* Description (mobile/tablet fallback) */}
                <p className="lg:hidden m-0 mb-5 text-[#757575] text-[0.9375rem] leading-[1.7]">
                  {service.description}
                </p>

                <div className="pt-5 border-t border-[#f0edf5]">
                  {/* Feature checklist */}
                  <ul className="m-0 p-0 list-none flex flex-wrap gap-x-6 gap-y-2.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-[#303030] text-[0.9375rem]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                          <path d="M3 8.5l3.5 3.5 6.5-7" stroke="#640679" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[clamp(48px,6vw,80px)]" />

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center px-10 py-[14px] rounded-full bg-brand text-white font-semibold text-base no-underline transition-colors duration-200 hover:bg-brand-dark"
          >
            Contactar con nosotros
          </a>
        </div>

        <div className="h-[clamp(80px,12vw,140px)]" />
      </div>
    </section>
  );
}
