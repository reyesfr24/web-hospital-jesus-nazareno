import { useInView } from '../hooks/useInView';
import { useState } from 'react';

const contactInfo = [
  {
    label: 'Teléfono',
    value: '601 623 400',
    href: 'tel:601623400',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#ACF7C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'jesusnazarenovillanueva@hotmail.com',
    href: 'mailto:jesusnazarenovillanueva@hotmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#ACF7C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6l-10 7L2 6" stroke="#ACF7C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Dirección',
    value: 'C/ Moreno de Pedrajas s/n\n14440 Villanueva de Córdoba (Córdoba)',
    href: 'https://maps.google.com/?q=Calle+Moreno+de+Pedrajas+Villanueva+de+Cordoba',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#ACF7C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3" stroke="#ACF7C1" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Contacto() {
  const { ref: sectionRef, inView } = useInView(0.1);
  const [formState, setFormState] = useState({ nombre: '', telefono: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contacto"
      style={{ backgroundColor: '#0f0416' }}
      className="py-24 lg:py-32"
    >
      <div
        ref={sectionRef}
        className="max-w-[88rem] mx-auto px-6 lg:px-10"
      >
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <div className={`mb-4 ${inView ? 'animate-fadeInLeft' : 'opacity-0-init'}`}>
              <span className="section-tag-dark">Contacto</span>
            </div>
            <h2
              className={`heading-display text-white ${inView ? 'animate-fadeInLeft delay-100' : 'opacity-0-init'}`}
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
            >
              Estaremos encantados
              <br />
              <em>de atenderte.</em>
            </h2>
          </div>
          <p
            className={`leading-relaxed self-end ${inView ? 'animate-fadeInRight delay-200' : 'opacity-0-init'}`}
            style={{ color: 'rgb(255 255 255 / 0.5)', fontSize: '1.05rem', lineHeight: '1.7' }}
          >
            Nuestro equipo está disponible para responder todas tus preguntas
            y acompañarte en el proceso de incorporación.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10">
          {/* LEFT — Contact cards */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'Dirección' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`card-dark p-6 flex items-start gap-4 group transition-all duration-300 hover:border-primary/30 no-underline ${inView ? 'animate-fadeInLeft' : 'opacity-0-init'}`}
                style={{
                  animationDelay: inView ? `${(i + 2) * 0.1}s` : '0s',
                  animationFillMode: 'forwards',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20"
                  style={{ background: 'rgb(100 6 121 / 0.15)', border: '1px solid rgb(100 6 121 / 0.2)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgb(255 255 255 / 0.35)' }}>
                    {item.label}
                  </p>
                  <p
                    className="font-medium leading-snug whitespace-pre-line"
                    style={{ color: 'rgb(255 255 255 / 0.85)', fontSize: '0.95rem' }}
                  >
                    {item.value}
                  </p>
                </div>
                <svg
                  className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-40 transition-opacity"
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}

            {/* Map placeholder */}
            <div
              className={`card-dark overflow-hidden rounded-2xl ${inView ? 'animate-fadeInLeft delay-600' : 'opacity-0-init'}`}
              style={{ minHeight: '180px', position: 'relative' }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(135deg, #1e0f28, #2d0a3a)',
                  backgroundImage: `
                    linear-gradient(rgb(100 6 121 / 0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgb(100 6 121 / 0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 gap-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#640679" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="#640679" strokeWidth="1.5"/>
                </svg>
                <p className="text-white/40 text-sm text-center">
                  Calle Moreno de Pedrajas s/n<br/>
                  14440 Villanueva de Córdoba
                </p>
                <a
                  href="https://maps.google.com/?q=Calle+Moreno+de+Pedrajas+Villanueva+de+Cordoba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark text-xs py-2 px-4"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            className={`card-dark p-7 ${inView ? 'animate-fadeInRight delay-300' : 'opacity-0-init'}`}
            style={{ animationFillMode: 'forwards' }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 h-full py-12 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgb(172 247 193 / 0.15)', border: '1px solid rgb(172 247 193 / 0.3)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#ACF7C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-white text-xl">¡Mensaje enviado!</h3>
                <p className="text-white/50 text-sm">Nos pondremos en contacto contigo en breve.</p>
              </div>
            ) : (
              <>
                <h3
                  className="font-display text-white mb-1"
                  style={{ fontSize: '1.4rem', fontWeight: 400 }}
                >
                  Escríbenos
                </h3>
                <p className="text-white/40 text-sm mb-6">
                  Sin compromiso. Respondemos en menos de 24h.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'rgb(255 255 255 / 0.35)' }}>
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.nombre}
                      onChange={(e) => setFormState((s) => ({ ...s, nombre: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all focus:ring-1"
                      style={{
                        background: 'rgb(255 255 255 / 0.05)',
                        border: '1px solid rgb(255 255 255 / 0.1)',
                      }}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'rgb(255 255 255 / 0.35)' }}>
                      Teléfono de contacto
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.telefono}
                      onChange={(e) => setFormState((s) => ({ ...s, telefono: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                      style={{
                        background: 'rgb(255 255 255 / 0.05)',
                        border: '1px solid rgb(255 255 255 / 0.1)',
                      }}
                      placeholder="600 000 000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'rgb(255 255 255 / 0.35)' }}>
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      value={formState.mensaje}
                      onChange={(e) => setFormState((s) => ({ ...s, mensaje: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all resize-none"
                      style={{
                        background: 'rgb(255 255 255 / 0.05)',
                        border: '1px solid rgb(255 255 255 / 0.1)',
                      }}
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <button type="submit" className="btn-primary justify-center mt-2">
                    Enviar mensaje
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p className="text-center text-white/25 text-xs">
                    También puedes llamarnos al{' '}
                    <a href="tel:601623400" className="text-accent/60 hover:text-accent transition-colors">
                      601 623 400
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
