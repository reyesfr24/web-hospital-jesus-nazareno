const year = new Date().getFullYear();

const navColumns = [
  {
    title: 'Páginas',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Nuestra Historia', href: '#historia' },
      { label: 'Nuestros Servicios', href: '#servicios' },
      { label: 'Instalaciones', href: '#instalaciones' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: '601 623 400', href: 'tel:601623400' },
      { label: 'Enviar email', href: 'mailto:jesusnazarenovillanueva@hotmail.com' },
      { label: 'Cómo llegar', href: 'https://maps.google.com/?q=Calle+Moreno+de+Pedrajas+Villanueva+de+Cordoba' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f0416', borderTop: '1px solid rgb(255 255 255 / 0.06)' }}>
      <div className="max-w-[88rem] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-[1fr_auto_auto] gap-12 pb-12" style={{ borderBottom: '1px solid rgb(255 255 255 / 0.06)' }}>
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <a href="#inicio">
              <img
                src="/logos/logo-transparente-alargado.png"
                alt="Hospital de Jesús Nazareno"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgb(255 255 255 / 0.35)' }}>
              Más de 200 años cuidando con dignidad,
              humanidad y amor cristiano.
            </p>
            <p className="text-xs" style={{ color: 'rgb(255 255 255 / 0.2)' }}>
              C/ Moreno de Pedrajas s/n<br />
              14440 Villanueva de Córdoba
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'rgb(255 255 255 / 0.2)' }}>
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgb(255 255 255 / 0.5)', textDecoration: 'none' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs" style={{ color: 'rgb(255 255 255 / 0.2)' }}>
            © {year} Hospital de Jesús Nazareno. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgb(255 255 255 / 0.15)' }}>
            Fundado en 1819 · Villanueva de Córdoba
          </p>
        </div>
      </div>
    </footer>
  );
}
