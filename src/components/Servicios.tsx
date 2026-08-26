import { useEffect, useRef, useState } from 'react';

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

function HeaderBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Requiere algo más de espacio libre que el resto de bloques
    // "animate-on-scroll" antes de disparar el efecto.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -150px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`header-reveal text-center ${visible ? 'visible' : ''}`}>
      <p className="m-0 mb-3.5 text-brand text-[0.7375rem] font-semibold tracking-[0.12em] uppercase">
        Atención Centrada en la Persona
      </p>
      <h2 className="m-0 text-text-dark font-semibold text-[clamp(2.025rem,7vw,4.95rem)] leading-[1.05] tracking-[-0.02em]">
        Nuestros Servicios
      </h2>
      <div className="h-5" />
      <p className="m-0 mx-auto text-[#757575] text-[1.0125rem] leading-[1.75] max-w-[540px]">
        Cuidado integral y personalizado que respeta la historia de vida, los valores y las preferencias de cada residente.
      </p>
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // El margen de disparo se calcula con la altura real de la tarjeta, para
    // que la animación no empiece hasta que quepa entera en el viewport.
    let observer: IntersectionObserver | undefined;
    const raf = requestAnimationFrame(() => {
      const cardHeight = el.getBoundingClientRect().height;
      const bottomMargin = Math.max(Math.min(cardHeight * 0.75, window.innerHeight - 80), 0);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer?.disconnect();
            }
          });
        },
        { threshold: 0, rootMargin: `0px 0px -${bottomMargin}px 0px` }
      );

      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`service-card-reveal${visible ? ' visible' : ''}`}
    >
      <div className="rounded-[29px] bg-white shadow-[0_16px_40px_-16px_rgba(100,6,121,0.25)]">
        <div className="flex items-center gap-5 lg:gap-11 px-6 py-7 md:px-9 md:py-8">
          {/* Title */}
          <h3 className="m-0 flex-1 min-w-0 text-brand font-bold text-[1.2375rem] md:text-[1.575rem] lg:text-[1.8rem] leading-[1.2] tracking-[-0.01em]">
            {service.title}
          </h3>

          {/* Description preview (desktop only) */}
          <p className="hidden lg:block w-[342px] xl:w-[378px] shrink-0 m-0 text-[#757575] text-[0.9rem] leading-[1.6]">
            {service.description}
          </p>

          {/* Decorative icon */}
          <span className="inline-flex items-center justify-center w-11 h-11 md:w-[3.15rem] md:h-[3.15rem] rounded-full shrink-0 bg-[#F3EEFA] text-brand">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 14V4m0 0L4 9m5-5l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <div className="px-6 md:px-9 pb-7 md:pb-8 pt-0">
          {/* Description (mobile/tablet fallback) */}
          <p className="lg:hidden m-0 mb-4 text-[#757575] text-[0.84375rem] leading-[1.7]">
            {service.description}
          </p>

          <div className="pt-4 border-t border-[#f0edf5]">
            {/* Feature checklist */}
            <ul className="m-0 p-0 list-none flex flex-wrap gap-x-5 gap-y-2">
              {service.features.map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-[#303030] text-[0.84375rem]">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <path d="M3 8.5l3.5 3.5 6.5-7" stroke="#640679" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="bg-[#F9F5FF]">
      <div className="px-[clamp(22px,4vw,43px)]">

        <div className="h-[clamp(72px,12vw,72px)]" />

        {/* Cabecera centrada */}
        <HeaderBlock />

        <div className="h-[clamp(43px,6vw,72px)]" />

        {/* Lista de servicios */}
        <div className="flex flex-col gap-2.5 max-w-[1080px] mx-auto">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="h-[clamp(72px,12vw,126px)]" />
      </div>
    </section>
  );
}
