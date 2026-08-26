import { navigate } from '../lib/navigation';

const logoModules = import.meta.glob('../assets/logos/ayudas/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const logos = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: path.split('/').pop()!.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
  }));

export default function AyudasRecibidas() {
  return (
    <div>
      {/* Header */}
      <div className="footer-mesh-gradient-2 px-[clamp(24px,4vw,48px)] pt-[clamp(28px,4vw,36px)] pb-[clamp(32px,5vw,48px)]">
        <div
          className="max-w-[820px] mx-auto"
          style={{ animation: 'hero-rise-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both' }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="inline-flex items-center gap-1.5 text-white/80 no-underline text-sm font-medium mb-8 px-4 py-2 rounded-full border border-white/25 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <span aria-hidden="true">←</span> Volver al inicio
          </a>
          <h1 className="text-white text-[clamp(1.75rem,4vw,2.5rem)] font-semibold m-0 mb-3">
            Ayudas Recibidas
          </h1>
          <p className="text-white/70 text-sm m-0">
            Entidades y organismos que colaboran con la Fundación Hospital de Jesús Nazareno
          </p>
        </div>
      </div>

      {/* Body */}
      <div
        className="max-w-[960px] mx-auto px-[clamp(24px,4vw,48px)] py-[clamp(48px,7vw,72px)]"
        style={{ animation: 'hero-rise-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' }}
      >
        <div className="relative bg-white border border-[#ecebf3] rounded-2xl pl-7 pr-6 py-7 mb-12 shadow-[0_2px_16px_rgba(100,6,121,0.06)] overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-gradient-to-b before:from-brand before:to-secondary">
          <span className="block text-brand text-xs font-semibold uppercase tracking-[0.08em] mb-3">
            Ayuda financiada por la Unión Europea
          </span>
          <p className="m-0 text-[1rem] leading-[1.8] text-text-dark">
            La <strong className="font-semibold">Fundación Hospital de Jesús Nazareno</strong> ha
            recibido una ayuda de la Unión Europea con cargo al{' '}
            <strong className="font-semibold">Fondo NextGenerationEU</strong>, en el marco del{' '}
            <strong className="font-semibold">Plan de Recuperación, Transformación y Resiliencia</strong>,
            para "nombre de la instalación" dentro del programa de incentivos ligados al
            autoconsumo y almacenamiento, con fuentes de energía renovable, así como la
            implantación de sistemas térmicos renovables en el sector residencial del{' '}
            <strong className="font-semibold">Ministerio para la Transición Ecológica y el Reto Demográfico</strong>,
            gestionado por la <strong className="font-semibold">Junta de Andalucía</strong>, a través
            de la <strong className="font-semibold">Agencia Andaluza de la Energía</strong>.
          </p>
        </div>

        {logos.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="bg-bg-light rounded-2xl flex items-center justify-center p-6 aspect-[4/3]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[0.9375rem] text-text-secondary italic">
            Próximamente añadiremos aquí los logotipos de las entidades colaboradoras.
          </p>
        )}
      </div>
    </div>
  );
}
