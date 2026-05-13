import { useInView } from '../hooks/useInView';

export default function Historia() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#e6e1d8' }}
    >
      <div className="max-w-[88rem] mx-auto px-6 lg:px-10">
        {/* Top label */}
        <div className={`mb-4 ${inView ? 'animate-fadeInUp' : 'opacity-0-init'}`}>
          <span className="section-tag-light">Desde 1819</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT — Text */}
          <div className="flex flex-col gap-10">
            <div>
              <h2
                className={`heading-display mb-6 ${inView ? 'animate-fadeInLeft delay-100' : 'opacity-0-init'}`}
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', color: '#0f0416' }}
              >
                Más de dos siglos de
                <br />
                <em>vocación de servicio.</em>
              </h2>
              <p
                className={`text-body leading-relaxed max-w-lg ${inView ? 'animate-fadeInLeft delay-200' : 'opacity-0-init'}`}
                style={{ color: '#54514c', fontSize: '1.05rem', lineHeight: '1.75' }}
              >
                Una historia de fe, caridad y entrega que comenzó con un sacerdote y su visión
                de un mundo más compasivo, y que hoy continúa transformando vidas.
              </p>
            </div>

            {/* Feature cards (like Alveora's clinic feature cards) */}
            <div className="flex flex-col gap-4">
              {/* Card 1 */}
              <div
                className={`p-6 rounded-2xl bg-white/60 border border-white/80 ${inView ? 'animate-fadeInLeft delay-300' : 'opacity-0-init'}`}
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgb(100 6 121 / 0.1)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" fill="#640679"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1" style={{ color: '#0f0416' }}>
                      El origen cristiano
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#54514c' }}>
                      Fundado por don Bernardo Moreno de Pedrajas (1745–1818), sacerdote que destinó
                      su patrimonio a aliviar el sufrimiento de los pobres, enfermos y desamparados.
                      Su testamento (1817–1818) dio nacimiento al hospital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className={`p-6 rounded-2xl bg-white/60 border border-white/80 ${inView ? 'animate-fadeInLeft delay-400' : 'opacity-0-init'}`}
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgb(100 6 121 / 0.1)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#640679" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22V12h6v10" stroke="#640679" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1" style={{ color: '#0f0416' }}>
                      Modernización y compromiso actual
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#54514c' }}>
                      Entre 1999 y 2007 se construyó el edificio actual: una residencia moderna,
                      accesible y funcional. Hoy implementamos el modelo de Atención Centrada en la
                      Persona (ACP), situando a cada residente en el centro del cuidado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${inView ? 'animate-fadeInLeft delay-500' : 'opacity-0-init'}`}>
              <a href="#servicios" className="btn-ghost-light">
                Conocer nuestros servicios
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT — Visual (image placeholder + philosophy pillars) */}
          <div className={`flex flex-col gap-6 ${inView ? 'animate-fadeInRight delay-200' : 'opacity-0-init'}`}>
            {/* Main visual card */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1e0f28 0%, #3d1050 50%, #640679 100%)',
                minHeight: '320px',
                border: '1px solid rgb(255 255 255 / 0.1)',
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 70%, #998FC7, transparent 60%), radial-gradient(circle at 80% 20%, #ACF7C1, transparent 50%)`,
                }}
              />
              <div className="relative z-10 p-8 h-full flex flex-col justify-between" style={{ minHeight: '320px' }}>
                <div>
                  <span className="section-tag-dark mb-6 inline-flex">Nuestra filosofía</span>
                  <p
                    className="font-display text-white/90 italic"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: '1.4' }}
                  >
                    "Cuidar no es hacer por la persona,
                    <br />
                    es hacer <span style={{ color: '#ACF7C1' }}>con ella.</span>"
                  </p>
                </div>
                <p className="text-white/40 text-xs uppercase tracking-widest">
                  Principio ACP — Atención Centrada en la Persona
                </p>
              </div>
            </div>

            {/* Three pillars row (like Alveora's philosophy pills) */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '✦', label: 'Dignidad' },
                { icon: '✦', label: 'Humanidad' },
                { icon: '✦', label: 'Amor cristiano' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`rounded-2xl p-4 text-center ${inView ? `animate-scaleIn delay-${(i + 4) * 100}` : 'opacity-0-init'}`}
                  style={{
                    background: 'rgb(255 255 255 / 0.5)',
                    border: '1px solid rgb(255 255 255 / 0.8)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="block text-lg mb-1" style={{ color: '#640679' }}>{item.icon}</span>
                  <span className="text-xs font-medium" style={{ color: '#0f0416' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
