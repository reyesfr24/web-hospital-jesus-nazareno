import logo from '../assets/logos/logo-transparente-alargado.png';

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-text-dark text-white/70 pt-[clamp(60px,8vw,100px)] px-[clamp(24px,4vw,48px)] pb-[clamp(32px,4vw,48px)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(40px,6vw,64px)] mb-[clamp(48px,6vw,72px)]">

          {/* Brand column */}
          <div>
            <img
              src={logo}
              alt="Hospital de Jesús Nazareno"
              className="h-11 object-contain mb-5 brightness-0 invert"
            />
            <p className="text-[0.9375rem] leading-[1.7] m-0 mb-6 max-w-[280px]">
              Más de 200 años cuidando con dignidad, humanidad y amor cristiano.
            </p>
            <div className="flex gap-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[rgba(172,247,193,0.15)] text-accent text-[0.8125rem] font-medium">
                Modelo ACP
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-[0.08em] uppercase m-0 mb-5">
              Navegación
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {['Inicio', 'Historia', 'Servicios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/65 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-[0.08em] uppercase m-0 mb-5">
              Contacto
            </h4>
            <div className="flex flex-col gap-3.5">
              {[
                { label: 'Dirección', value: 'Plaza Jesús Nazareno, s/n' },
                { label: 'Correo', value: 'info@hospitaljesusnazareno.es' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-white/40 text-xs font-semibold uppercase tracking-[0.06em] mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-[0.9375rem] text-white/75">{item.value}</div>
                </div>
              ))}

              {/* Phone pill button */}
              <div>
                <div className="text-white/40 text-xs font-semibold uppercase tracking-[0.06em] mb-2">
                  Teléfono
                </div>
                <a
                  href="tel:+34000000000"
                  className="inline-flex items-center justify-between gap-3 py-1.5 pl-[18px] pr-1.5 rounded-full bg-white/95 no-underline"
                >
                  <span className="text-text-dark font-medium text-[0.9375rem] tracking-[0.01em]">
                    +34 000 000 000
                  </span>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-3">
          <p className="m-0 text-sm">
            © {new Date().getFullYear()} Hospital de Jesús Nazareno. Todos los derechos reservados.
          </p>
          <p className="m-0 text-sm">
            Fundado en 1819 · Vocación cristiana de servicio
          </p>
        </div>
      </div>
    </footer>
  );
}
