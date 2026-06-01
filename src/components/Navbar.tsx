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

  const linkColor = scrolled ? '#303030' : 'rgba(255,255,255,0.88)';
  const linkHoverColor = scrolled ? '#640679' : '#ffffff';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-transition ${scrolled ? 'nav-scrolled' : ''} ${hidden ? 'nav-hidden' : ''}`}
      style={navAnimDone ? undefined : { animation: 'nav-slide-down 1.6s cubic-bezier(0.16, 1, 0.3, 1) both' }}
    >
      <div style={{ padding: '0 clamp(24px, 4vw, 48px)' }}>
        <div className="flex items-center justify-between" style={{ height: '96px' }}>

          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Hospital de Jesús Nazareno"
              style={{
                height: '72px',
                objectFit: 'contain',
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                transition: 'filter 0.3s',
              }}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center" style={{ gap: '40px', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    color: linkColor,
                    fontSize: '1rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = linkHoverColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center"
            style={{
              padding: '10px 28px',
              borderRadius: '9999px',
              backgroundColor: scrolled ? '#640679' : 'rgba(255,255,255,0.12)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease-out, opacity 0.2s',
              backdropFilter: scrolled ? 'none' : 'blur(8px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Contactar
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center"
            style={{ width: '40px', height: '40px', background: 'none', border: 'none', cursor: 'pointer', gap: '5px' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  backgroundColor: scrolled ? '#303030' : '#ffffff',
                  borderRadius: '2px',
                  transition: 'background-color 0.3s, transform 0.3s',
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

        {/* Mobile menu */}
        <div className={`mobile-menu md:hidden ${menuOpen ? 'open' : ''}`} style={{ backgroundColor: 'white' }}>
          <div style={{ padding: '16px 0 24px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: '#303030',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  borderBottom: '1px solid #f0edf5',
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              style={{
                display: 'inline-flex',
                marginTop: '16px',
                padding: '10px 28px',
                borderRadius: '9999px',
                backgroundColor: '#640679',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
