import { useEffect, useRef, useState, type FormEvent } from 'react';

const EMAIL = 'administracion@hospitaljesusnazareno.es';

const MAP_QUERY = 'Hospital de Jesús Nazareno, Calle Moreno de Pedrajas, 14440 Villanueva de Córdoba';
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

const MOTIVOS = [
  'Información general',
  'Solicitud de ingreso',
  'Psicología y Trabajo Social',
  'Enfermería',
  'Fisioterapia',
  'Terapia Ocupacional',
  'Gerocultores y Cuidadores',
  'Cocina',
  'Visitas',
  'Otro',
];

const FIELD =
  'w-full rounded-[14px] border border-[#e6dff2] bg-white px-4 py-3 text-[0.9rem] text-text-dark placeholder:text-text-secondary/70 outline-none transition-[border-color,box-shadow] duration-200 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(153,143,199,0.25)]';
const LABEL = 'block mb-2 text-text-dark text-[1.0125rem] font-medium';

function useRevealOnce<T extends HTMLElement>(rootMargin: string) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, visible };
}

function HeaderBlock() {
  const { ref, visible } = useRevealOnce<HTMLDivElement>('0px 0px -150px 0px');

  return (
    <div ref={ref} className={`header-reveal text-center ${visible ? 'visible' : ''}`}>
      <p className="m-0 mb-3.5 text-brand text-[0.7375rem] font-semibold tracking-[0.12em] uppercase">
        Estamos a tu disposición
      </p>
      <h2 className="m-0 mx-auto max-w-[900px] text-text-dark font-semibold text-[clamp(2.025rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em]">
        Escríbenos o visítanos
      </h2>
      <div className="h-5" />
      <p className="m-0 mx-auto text-[#757575] text-[1.0125rem] leading-[1.75] max-w-[520px]">
        ¿Tienes dudas sobre el centro o nuestros servicios? Escríbenos y te responderemos lo antes posible, o ven a conocernos en Villanueva de Córdoba.
      </p>
    </div>
  );
}

function FormCard() {
  const { ref, visible } = useRevealOnce<HTMLFormElement>('0px 0px -120px 0px');

  // Sin backend: abre el cliente de correo del usuario con el mensaje preparado.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const body = [
      `Nombre: ${get('nombre')} ${get('apellidos')}`,
      `Email: ${get('email')}`,
      `Teléfono: ${get('telefono') || '—'}`,
      `Motivo: ${get('motivo')}`,
      '',
      get('mensaje'),
    ].join('\n');

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Consulta web: ${get('motivo')}`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className={`service-card-reveal${visible ? ' visible' : ''} rounded-[29px] bg-white p-6 sm:p-8 shadow-[0_16px_40px_-16px_rgba(100,6,121,0.25)]`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
        <div>
          <label htmlFor="c-nombre" className={LABEL}>Nombre*</label>
          <input id="c-nombre" name="nombre" type="text" required autoComplete="given-name" placeholder="María" className={FIELD} />
        </div>
        <div>
          <label htmlFor="c-apellidos" className={LABEL}>Apellidos*</label>
          <input id="c-apellidos" name="apellidos" type="text" required autoComplete="family-name" placeholder="García López" className={FIELD} />
        </div>
        <div>
          <label htmlFor="c-email" className={LABEL}>Correo electrónico*</label>
          <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="tucorreo@ejemplo.com" className={FIELD} />
        </div>
        <div>
          <label htmlFor="c-telefono" className={LABEL}>Teléfono</label>
          <input id="c-telefono" name="telefono" type="tel" autoComplete="tel" placeholder="600 000 000" className={FIELD} />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="c-motivo" className={LABEL}>Motivo de la consulta*</label>
        <div className="relative">
          <select
            id="c-motivo"
            name="motivo"
            required
            defaultValue=""
            className={`${FIELD} appearance-none pr-11 cursor-pointer invalid:text-text-secondary/70`}
          >
            <option value="" disabled>Selecciona una opción</option>
            {MOTIVOS.map((m) => (
              <option key={m} value={m} className="text-text-dark">{m}</option>
            ))}
          </select>
          <svg
            width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-dark"
          >
            <path d="M4.5 7l4.5 4.5L13.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="c-mensaje" className={LABEL}>Mensaje*</label>
        <textarea
          id="c-mensaje"
          name="mensaje"
          required
          rows={3}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          className={`${FIELD} resize-y min-h-[90px]`}
        />
      </div>

      <label className="mt-4 flex items-start gap-3 text-[0.8125rem] leading-[1.6] text-text-secondary cursor-pointer">
        <input type="checkbox" name="privacidad" required className="mt-1 h-4 w-4 shrink-0 accent-brand cursor-pointer" />
        <span>
          He leído y acepto el <a href="/aviso-legal" className="text-brand underline underline-offset-2">aviso legal</a> y el
          tratamiento de mis datos para atender esta consulta.
        </span>
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-[14px] bg-accent py-3.5 text-[1rem] font-semibold text-brand-dark cursor-pointer transition-[background-color,color,transform] duration-200 hover:bg-brand hover:text-white active:scale-[0.99]"
      >
        Enviar mensaje
      </button>
    </form>
  );
}

function MapCard() {
  const { ref, visible } = useRevealOnce<HTMLDivElement>('0px 0px -120px 0px');

  return (
    <div
      ref={ref}
      className={`service-card-reveal${visible ? ' visible' : ''} flex flex-col overflow-hidden rounded-[29px] bg-white shadow-[0_16px_40px_-16px_rgba(100,6,121,0.25)] min-h-[340px] lg:min-h-0`}
    >
      <iframe
        title="Ubicación del Hospital de Jesús Nazareno en Villanueva de Córdoba"
        src={MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="w-full flex-1 min-h-[260px] border-0"
      />
      <div className="px-6 py-5 sm:px-8">
        <p className="m-0 text-text-dark font-semibold text-[1rem]">Hospital de Jesús Nazareno</p>
        <p className="m-0 mt-1 text-[#757575] text-[0.875rem] leading-[1.6]">
          Calle Moreno de Pedrajas s/n, 14440 Villanueva de Córdoba (Córdoba)
        </p>
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-brand text-[0.875rem] font-semibold underline underline-offset-2"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  );
}

export default function Contacto() {
  return (
    <section id="contacto" className="bg-[#F9F5FF]">
      <div className="px-[clamp(22px,4vw,43px)]">
        <div className="h-[clamp(72px,12vw,72px)]" />
        <HeaderBlock />
        <div className="h-[clamp(43px,6vw,72px)]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1080px] mx-auto">
          <FormCard />
          <MapCard />
        </div>
        <div className="h-[clamp(72px,12vw,126px)]" />
      </div>
    </section>
  );
}
