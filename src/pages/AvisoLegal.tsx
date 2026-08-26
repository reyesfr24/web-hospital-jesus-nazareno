import { navigate } from '../lib/navigation';

export default function AvisoLegal() {
  return (
    <div>
      {/* Header */}
      <div className="footer-mesh-gradient-2 px-[clamp(24px,4vw,48px)] pt-[clamp(28px,4vw,36px)] pb-[clamp(32px,5vw,48px)]">
        <div
          className="max-w-[820px] mx-auto"
          style={{ animation: 'hero-rise-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both' }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="inline-flex items-center gap-1.5 text-white/80 no-underline text-sm font-medium mb-8 px-4 py-2 rounded-full border border-white/25 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <span aria-hidden="true">←</span> Volver al inicio
          </a>
          <h1 className="text-white text-[clamp(1.75rem,4vw,2.5rem)] font-semibold m-0 mb-3">
            Aviso Legal
          </h1>
          <p className="text-white/70 text-sm m-0">Última actualización: Febrero de 2026</p>
        </div>
      </div>

      {/* Body */}
      <div
        className="max-w-[820px] mx-auto px-[clamp(24px,4vw,48px)] py-[clamp(48px,7vw,72px)]"
        style={{ animation: 'hero-rise-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' }}
      >
        <p className="text-[0.9375rem] leading-[1.75] text-text-secondary mb-6">
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y Comercio Electrónico (LSSICE) a continuación se detallan
          los datos identificativos de la entidad:
        </p>

        <div className="bg-bg-light rounded-2xl px-6 py-5 mb-10 flex flex-col gap-2">
          <p className="m-0 font-semibold text-brand text-base">Hospital de Jesús Nazareno</p>
          <p className="m-0 text-[0.9375rem] text-text-secondary">
            <span className="font-semibold text-text-dark">Razón social:</span> HOSPITAL DE JESÚS NAZARENO
          </p>
          <p className="m-0 text-[0.9375rem] text-text-secondary">
            <span className="font-semibold text-text-dark">NIF:</span> G14019095
          </p>
          <p className="m-0 text-[0.9375rem] text-text-secondary">
            <span className="font-semibold text-text-dark">Dirección:</span> C/ Moreno de Pedrajas s/n - 14440 - Villanueva de Córdoba - CÓRDOBA
          </p>
          <p className="m-0 text-[0.9375rem] text-text-secondary">
            <span className="font-semibold text-text-dark">Teléfono:</span> 957120047
          </p>
          <p className="m-0 text-[0.9375rem] text-text-secondary">
            <span className="font-semibold text-text-dark">Email:</span> jesusnazarenovillanueva@hotmail.com
          </p>
        </div>

        {[
          {
            title: 'Finalidad de la página web',
            paragraphs: [
              'El presente sitio web tiene como finalidad proporcionar información sobre los servicios de atención residencial y sanitaria que ofrece el Hospital de Jesús Nazareno, una institución dedicada al cuidado de personas mayores en Villanueva de Córdoba.',
              'El presente aviso legal (en adelante, el "Aviso Legal") regula el uso del sitio web del Hospital de Jesús Nazareno.',
            ],
          },
          {
            title: 'Legislación',
            paragraphs: [
              'Con carácter general las relaciones entre HOSPITAL DE JESÚS NAZARENO Hospital de Jesús Nazareno y los Usuarios de sus servicios telemáticos, presentes en este sitio web, se encuentran sometidas a la legislación y jurisdicción españolas.',
            ],
          },
          {
            title: 'Uso y acceso de usuarios',
            paragraphs: [
              'El Usuario queda informado, y acepta, que el acceso a la presente web no supone, en modo alguno, el inicio de una relación comercial con HOSPITAL DE JESÚS NAZARENO Hospital de Jesús Nazareno o cualquiera de sus delegaciones.',
            ],
          },
          {
            title: 'Propiedad intelectual e industrial',
            paragraphs: [
              'Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de HOSPITAL DE JESÚS NAZARENO Hospital de Jesús Nazareno y, por tanto, queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos de sus páginas web ni aun citando las fuentes, salvo consentimiento por escrito de HOSPITAL DE JESÚS NAZARENO Hospital de Jesús Nazareno.',
            ],
          },
          {
            title: 'Contenido de la web y enlaces (links)',
            paragraphs: [
              'HOSPITAL DE JESÚS NAZARENO Hospital de Jesús Nazareno se reserva el derecho a actualizar, modificar o eliminar la información contenida en sus páginas web pudiendo incluso limitar o no permitir el acceso a dicha información a ciertos usuarios.',
              'HOSPITAL DE JESÚS NAZARENO Hospital de Jesús Nazareno no asume responsabilidad alguna por la información contenida en páginas web de terceros a las que se pueda acceder por "links" o enlaces desde cualquier página web propiedad de HOSPITAL DE JESÚS NAZARENO Hospital de Jesús Nazareno. La presencia de "links" o enlaces en las páginas web de HOSPITAL DE JESÚS NAZARENO Hospital de Jesús Nazareno tiene finalidad meramente informativa y en ningún caso supone sugerencia, invitación o recomendación sobre los mismos.',
            ],
          },
        ].map((section) => (
          <div key={section.title} className="mb-9 last:mb-0">
            <h2 className="text-text-dark font-semibold text-lg tracking-[0.01em] m-0 mb-3">
              {section.title}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-[0.9375rem] leading-[1.75] text-text-secondary m-0 mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
