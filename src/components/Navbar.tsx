import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Historia', href: '#historia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Instalaciones', href: '#instalaciones' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[88rem] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 flex-shrink-0">
          <img
            src="/logos/logo-transparente-alargado.png"
            alt="Hospital de Jesús Nazareno"
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:601623400" className="btn-ghost-dark text-sm py-2.5 px-5">
            601 623 400
          </a>
          <a href="#contacto" className="btn-primary text-sm py-2.5 px-5">
            Contactar
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
        style={{ background: 'rgb(15 4 22 / 0.97)', backdropFilter: 'blur(20px)' }}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-sm font-medium text-white/80 hover:text-white transition-colors border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3 flex flex-col gap-2">
            <a href="tel:601623400" className="btn-ghost-dark text-sm justify-center">
              601 623 400
            </a>
            <a href="#contacto" className="btn-primary text-sm justify-center" onClick={() => setMenuOpen(false)}>
              Contactar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
