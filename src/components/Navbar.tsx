import { useState, useEffect } from 'react';
import logo from '../assets/logos/logo-transparente-alargado.png';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Historia', href: '#historia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navAnimDone, setNavAnimDone] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      if (currentY > lastY && currentY > 100) {
        setHidden(true);
      } else if (currentY < lastY) {
        setHidden(false);
      }
      lastY = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setNavAnimDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLight = scrolled && !menuOpen;

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.body.style.overflow = '';
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    setTimeout(() => {
      const top = target.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 320);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-transition${navLight ? ' nav-scrolled' : ''}${hidden ? ' nav-hidden' : ''}`}
      style={navAnimDone ? undefined : { animation: 'nav-slide-down 1.6s cubic-bezier(0.16, 1, 0.3, 1) both' }}
    >
      <div className="relative z-[60] px-[clamp(24px,4vw,48px)]">
        <div className="relative flex items-center justify-between h-24">

          {/* Logo */}
          <a href="#inicio" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="Hospital de Jesús Nazareno"
              className={`h-[72px] object-contain transition-[filter] duration-300${navLight ? '' : ' brightness-0 invert'}`}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`nav-link text-base font-medium no-underline transition-colors duration-200${scrolled ? ' text-[#303030] hover:text-brand' : ' text-white/88 hover:text-white'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contacto"
            className={`hidden md:inline-flex items-center px-7 py-[10px] rounded-full border-[1.5px] border-white/35 text-white font-semibold text-[0.9375rem] no-underline transition-[background-color,opacity] duration-200 hover:opacity-85${scrolled ? ' bg-brand' : ' bg-white/12 backdrop-blur-[8px]'}`}
          >
            Contactar
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-[22px] h-[2px] rounded-[2px] transition-[background-color,transform] duration-300${navLight ? ' bg-[#303030]' : ' bg-white'}`}
                style={{
                  transformOrigin: 'center',
                  transform:
                    menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 5px)'
                    : menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -5px)'
                    : menuOpen && i === 1 ? 'scaleX(0)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay md:hidden fixed inset-0 z-50${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div
          className="mobile-menu-backdrop absolute inset-0"
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative px-[clamp(24px,4vw,48px)] pt-28">
          <div className="mobile-menu-card flex flex-col gap-1.5 bg-white rounded-2xl shadow-xl p-3">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-menu-link relative flex items-center rounded-xl pl-8 pr-4 py-4 text-[#303030] font-medium text-lg no-underline"
                style={{ transitionDelay: `${i * 40}ms` }}
                onClick={(e) => handleMobileLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
