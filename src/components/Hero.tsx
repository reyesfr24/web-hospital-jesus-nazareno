import fondo2 from '../assets/images/portada-persona.webp';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-brand overflow-hidden flex flex-col">

      {/* Background image + gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 28%),
            linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 42%),
            linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)),
            url('${fondo2}')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col justify-end flex-1 px-[clamp(24px,4vw,48px)] min-h-screen">

        {/* Grid 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch pt-[116px] gap-10">

          {/* Columna izquierda: badge + H1 + CTAs + stats */}
          <div className="flex flex-col">

            {/* Badges */}
            <div className="mb-7 flex flex-wrap gap-[10px]">
              <span className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full bg-white/12 backdrop-blur-[8px] text-white/90 text-sm font-medium border border-white/20">
                <span className="w-[7px] h-[7px] rounded-full bg-accent shrink-0" />
                Fundado en 1819
              </span>
              <span className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full bg-white/12 backdrop-blur-[8px] text-white/90 text-sm font-medium border border-white/20">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4C2FC"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" fill="#D4C2FC" stroke="none" />
                </svg>
                Villanueva de Córdoba
              </span>
            </div>

            {/* H1 */}
            <h1
              className="mb-8 text-white font-semibold text-[clamp(2.25rem,4vw,4rem)] leading-[1.08] tracking-[-0.02em]"
              style={{ animation: 'hero-rise-in 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' }}
            >
              Hospital de{' '}
              <span className="text-accent">Jesús Nazareno</span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-wrap gap-[14px]">
              <a
                href="#historia"
                className="inline-flex items-center px-8 py-[13px] rounded-full bg-brand border-[1.5px] border-white/35 text-white font-semibold text-base no-underline transition-opacity duration-200 hover:opacity-85"
              >
                Conocer más
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center px-8 py-[13px] rounded-full bg-white/95 text-brand font-semibold text-base no-underline transition-opacity duration-200 hover:opacity-[0.88]"
              >
                Nuestros servicios
              </a>
            </div>

            {/* Stats */}
            <div className="pt-6 pb-9 flex flex-wrap gap-3">
              {[
                { value: '+200 años', label: 'de historia' },
                { value: 'Modelo ACP', label: 'centrado en la persona' },
                { value: 'Amor cristiano', label: 'en cada cuidado' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col px-[18px] py-3 rounded-[14px] bg-white/10 backdrop-blur-[8px] border border-white/15"
                >
                  <span className="text-accent font-bold text-sm">{stat.value}</span>
                  <span className="text-white/65 text-xs mt-[2px]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: eslogan alineado al fondo */}
          <div className="flex justify-end items-end pb-9">
            <p
              className="m-0 text-white font-semibold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] tracking-[-0.01em] text-right max-w-[520px] [text-shadow:0_2px_20px_rgba(0,0,0,0.3)]"
              style={{ animation: 'hero-rise-in 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both' }}
            >
              Más de 200 años
              <br />
              <span className="text-accent">cuidando</span> con dignidad,
              <br />
              humanidad y amor cristiano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
