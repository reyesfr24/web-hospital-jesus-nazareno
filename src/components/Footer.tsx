import logo from '../assets/logos/redondo-negativo.png';
import { navigate } from '../lib/navigation';

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="footer-mesh-gradient-2 text-white/70 pt-[clamp(60px,8vw,80px)] px-[clamp(24px,4vw,48px)] pb-[clamp(32px,4vw,48px)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-[clamp(40px,6vw,64px)] mb-[clamp(48px,6vw,72px)]">

          {/* Logo + description */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center md:flex-1">
            <img
              src={logo}
              alt="Hospital de Jesús Nazareno"
              className="w-full max-w-[320px] sm:w-1/2 sm:max-w-none aspect-square object-cover shrink-0"
            />
            <p className="flex-1 text-white/80 text-[1.25rem] sm:text-[1.5rem] leading-[1.7] italic font-light tracking-[0.01em] m-0">
              Más de 200 años cuidando con dignidad, humanidad y amor cristiano.
            </p>
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-white/15 md:h-auto md:w-px md:self-stretch" />

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-[minmax(220px,1.6fr)_minmax(150px,1fr)] gap-[clamp(32px,5vw,56px)]">

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-[0.08em] uppercase m-0 mb-5">
                Contacto
              </h4>
              <div className="flex flex-col gap-3.5">
                {[
                  { label: 'Teléfono', value: ['601 623 400'] },
                  { label: 'Email', value: ['jesusnazarenovillanueva@hotmail.com'] },
                  { label: 'Dirección', value: ['Calle Moreno de Pedrajas s/n', '14440 Villanueva de Córdoba (Córdoba)'] },
                  { label: 'Horario de visitas', value: ['Mañana: 10:00 - 12:30', 'Tarde: 16:00 - 19:00'] },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-secondary text-xs font-semibold uppercase tracking-[0.06em] mb-0.5">
                      {item.label}
                    </div>
                    {item.value.map((line) => (
                      <div key={line} className="text-[0.9375rem] text-white/75 break-words">
                        {line}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-[0.08em] uppercase m-0 mb-5">
                Información de interés
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {[
                  { label: 'Aviso Legal', href: '/aviso-legal', onClick: () => navigate('/aviso-legal') },
                  { label: 'Política de Cookies', href: '/politica-cookies', onClick: () => navigate('/politica-cookies') },
                  { label: 'Accesibilidad', href: '/accesibilidad', onClick: () => navigate('/accesibilidad') },
                  { label: 'Ayudas recibidas', href: '/ayudas-recibidas', onClick: () => navigate('/ayudas-recibidas') },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={
                        item.onClick
                          ? (e) => {
                              e.preventDefault();
                              item.onClick!();
                            }
                          : undefined
                      }
                      className="text-white/65 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
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
