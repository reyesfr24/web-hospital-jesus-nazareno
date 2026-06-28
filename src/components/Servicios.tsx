const SERVICES = [
  {
    title: 'Psicología y Trabajo Social',
    description:
      'Escuchamos, acompañamos y respetamos los ritmos personales. Trabajamos desde la historia de vida, los valores y las preferencias de cada residente.',
    features: ['Historia de vida', 'Acompañamiento emocional', 'Apoyo a familias'],
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Enfermería',
    description:
      'Seguimiento continuo del estado de salud, ajustando cuidados y medicación. Se prioriza el confort, la seguridad y la dignidad.',
    features: ['Control de medicación', 'Vigilancia continua', 'Gestión de curas'],
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    title: 'Fisioterapia',
    description:
      'Intervención individual teniendo en cuenta capacidades, deseos y objetivos. Fomento del movimiento funcional y prevención de caídas.',
    features: ['Rehabilitación funcional', 'Prevención de caídas', 'Ejercicio terapéutico'],
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Terapia Ocupacional',
    description:
      'Actividades basadas en intereses, hábitos y roles previos, fomentando la participación activa y la toma de decisiones.',
    features: ['Actividades personalizadas', 'Autonomía y decisión', 'Estimulación cognitiva'],
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
      </svg>
    ),
  },
  {
    title: 'Gerocultores y Cuidadores',
    description:
      'Atención diaria respetando preferencias, rutinas y tiempos personales. El vínculo humano y el trato cercano son la base del cuidado.',
    features: ['Respeto a rutinas personales', 'Trato cercano y humano', 'Cuidado con dignidad'],
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Cocina',
    description:
      'Alimentación adaptada a las necesidades de salud, pero también a los gustos, costumbres y preferencias personales.',
    features: ['Menús personalizados', 'Dietas terapéuticas', 'Sabores y tradición'],
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.184 1.837 2.43v.601" />
      </svg>
    ),
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

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute inset-0 z-[2] pointer-events-none bg-[linear-gradient(to_right,#F9F5FF_0%,transparent_8%,transparent_92%,#F9F5FF_100%)]" />

          {/* Scrolling track — duplicated for seamless loop */}
          <div className="marquee-track flex gap-6 w-max">
            {[...SERVICES, ...SERVICES].map((service, i) => (
              <div
                key={i}
                className="w-[380px] shrink-0 flex flex-col bg-white rounded-[20px] p-9"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-[18px] mb-5">
                  <div className="inline-flex items-center justify-center w-[68px] h-[68px] rounded-2xl bg-brand text-white shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="m-0 text-text-dark font-semibold text-[1.375rem] leading-[1.25]">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="m-0 mb-5 text-[#757575] text-[0.9375rem] leading-[1.7]">
                  {service.description}
                </p>

                {/* Feature checklist */}
                <ul className="m-0 mb-6 p-0 list-none flex flex-col gap-2.5 flex-1">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-[#303030] text-[0.9375rem]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <path d="M3 8.5l3.5 3.5 6.5-7" stroke="#640679" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Footer link */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-[6px] text-brand font-semibold text-[0.9375rem] no-underline border-t border-[#f0edf5] pt-5 transition-[gap] duration-200 hover:gap-[10px]"
                >
                  Más información
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9m-4-4.5L11.5 7l-4 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
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
