import { useEffect, useRef } from 'react';

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    heading.style.opacity = '0';
    heading.style.transform = 'translateY(30px)';
    const timer = setTimeout(() => {
      heading.style.transition = 'opacity 1s cubic-bezier(.16,1,.3,1), transform 1s cubic-bezier(.16,1,.3,1)';
      heading.style.opacity = '1';
      heading.style.transform = 'translateY(0)';
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: '#0f0416' }}
    >
      {/* Background gradient orbs */}
      <div
        className="absolute top-0 left-0 w-[60vw] h-[60vh] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, #640679 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[50vw] h-[50vh] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom right, #998FC7 0%, transparent 65%)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgb(255 255 255 / 1) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-10 w-full pb-16 pt-32 lg:pt-28">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-end">

          {/* LEFT — Main content */}
          <div className="flex flex-col gap-8">
            {/* Section tag */}
            <div
              className="opacity-0-init animate-fadeInUp"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <span className="section-tag-dark">
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: '#ACF7C1' }}
                />
                Fundado en 1819 · Villanueva de Córdoba
              </span>
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              className="heading-display text-white"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              Hospital de
              <br />
              <span style={{ color: '#998FC7' }}>Jesús Nazareno.</span>
            </h1>

            {/* Slogan */}
            <p
              className="text-white/60 font-light max-w-lg opacity-0-init animate-fadeInUp"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                lineHeight: '1.65',
                animationDelay: '0.4s',
                animationFillMode: 'forwards',
              }}
            >
              Más de 200 años cuidando con dignidad,
              <br />
              humanidad y amor cristiano.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 opacity-0-init animate-fadeInUp"
              style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
            >
              <a href="#historia" className="btn-primary">
                Nuestra Historia
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#servicios" className="btn-ghost-dark">
                Nuestros Servicios
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-8 pt-4 border-t opacity-0-init animate-fadeInUp"
              style={{
                borderColor: 'rgb(255 255 255 / 0.08)',
                animationDelay: '0.7s',
                animationFillMode: 'forwards',
              }}
            >
              {[
                { value: '+200', label: 'Años de historia' },
                { value: '1819', label: 'Año de fundación' },
                { value: 'ACP', label: 'Modelo de cuidado' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span
                    className="font-display text-white font-light"
                    style={{ fontSize: '1.75rem', letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Cards */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Trust card (like Alveora's testimonial card) */}
            <div
              className="card-dark p-5 opacity-0-init animate-fadeInRight"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgb(100 6 121 / 0.3)', border: '1px solid rgb(100 6 121 / 0.4)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" fill="#998FC7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    "El cuidado de nuestros residentes es el centro de todo lo que hacemos."
                  </p>
                  <p className="text-white/40 text-xs mt-2">— Modelo de Atención Centrada en la Persona</p>
                </div>
              </div>
            </div>

            {/* Founding year card (like Alveora's video thumbnail) */}
            <div
              className="relative rounded-2xl overflow-hidden opacity-0-init animate-scaleIn"
              style={{
                animationDelay: '0.65s',
                animationFillMode: 'forwards',
                background: 'linear-gradient(135deg, #1e0f28 0%, #2d0a3a 50%, #130a1a 100%)',
                border: '1px solid rgb(255 255 255 / 0.06)',
                minHeight: '220px',
              }}
            >
              {/* Decorative elements */}
              <div
                className="absolute top-0 right-0 w-48 h-48 opacity-20"
                style={{
                  background: 'radial-gradient(circle, #640679 0%, transparent 70%)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 opacity-15"
                style={{
                  background: 'radial-gradient(circle, #998FC7 0%, transparent 70%)',
                }}
              />

              <div className="relative z-10 p-7 h-full flex flex-col justify-between">
                <img
                  src="/logos/logo-transparente-alargado.png"
                  alt="Logo"
                  className="h-8 w-auto opacity-80"
                />
                <div>
                  <p
                    className="font-display text-white/20"
                    style={{ fontSize: '5rem', lineHeight: '1', letterSpacing: '-0.04em' }}
                  >
                    1819
                  </p>
                  <p className="text-white/50 text-xs uppercase tracking-widest mt-1">
                    Más de dos siglos de servicio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs uppercase tracking-widest">
        <span>Descubrir</span>
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgb(255 255 255 / 0.3), transparent)' }}
        />
      </div>
    </section>
  );
}
