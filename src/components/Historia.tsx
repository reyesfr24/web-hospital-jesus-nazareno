import { useEffect, useRef, useState } from 'react';
import iglesiaInterior from '../assets/images/iglesia-interior.webp';
import closeupHands from '../assets/images/closeup-support-hands.webp';

const HL = ({ text }: { text: string }) => (
  <span className="text-brand bg-accent/25 rounded-[6px] px-2">
    {text}
  </span>
);

// Igual que el observer global de App.tsx (añade "visible" al entrar en
// pantalla) pero con más margen, para que haga falta más espacio en blanco
// antes de que se aprecie el efecto. El marcador "local-reveal" excluye el
// elemento del observer global para que no se dispare antes de tiempo.
function useRevealObserver<T extends HTMLElement>(rootMargin: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function HeaderBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Requiere algo más de espacio libre que el resto de bloques
    // "animate-on-scroll" antes de disparar el efecto.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -150px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`header-reveal text-center ${visible ? 'visible' : ''}`}>
      <p className="m-0 mb-3.5 text-brand text-[0.7375rem] font-semibold tracking-[0.12em] uppercase">
        Desde 1819
      </p>
      <h2 className="m-0 text-text-dark font-semibold text-[clamp(2.025rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em]">
        <HL text="Nuestra Historia" />
      </h2>
      <div className="h-5" />
      <p className="m-0 mx-auto text-[#757575] text-[1.0125rem] leading-[1.75] max-w-[560px]">
        Más de dos siglos de vocación de servicio, guiados por la fe cristiana y el amor a los más necesitados.
      </p>
    </div>
  );
}

export default function Historia() {
  const reveal1 = useRevealObserver<HTMLDivElement>('0px 0px -140px 0px');
  const reveal2 = useRevealObserver<HTMLDivElement>('0px 0px -140px 0px');
  const reveal3 = useRevealObserver<HTMLDivElement>('0px 0px -140px 0px');
  const reveal4 = useRevealObserver<HTMLDivElement>('0px 0px -140px 0px');

  return (
    <section id="historia" className="bg-white">
      <div className="px-[clamp(22px,4vw,43px)]">

        <div className="h-[clamp(72px,12vw,45px)]" />

        {/* Cabecera centrada */}
        <HeaderBlock />

        <div className="h-[clamp(54px,8vw,90px)]" />

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 gap-5 max-w-[1215px] mx-auto lg:grid-cols-2 lg:[grid-template-rows:585px_585px] lg:gap-x-7 lg:gap-y-9">

          {/* Fila 1: imagen izquierda */}
          <div ref={reveal1} className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(100,6,121,0.12)] animate-on-scroll local-reveal reveal-top">
            <img
              src={iglesiaInterior}
              alt="Interior de la iglesia del Hospital de Jesús Nazareno"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Fila 1: card derecha */}
          <div ref={reveal2} className="bg-[#f4f1fb] rounded-[18px] px-11 py-9 flex flex-col justify-center overflow-hidden animate-on-scroll local-reveal slide-up delay-2">
            <h3 className="mb-3.5 text-brand font-semibold text-[clamp(1.2375rem,2.5vw,1.6875rem)] leading-[1.2]">
              El origen cristiano
            </h3>
            <hr className="border-0 border-t-2 border-brand/20 mb-5" />
            <p className="mb-3 text-[#5a5a6e] leading-[1.8] text-[1.0575rem] lg:text-[1.1925rem]">
              El Hospital de Jesús Nazareno tiene su origen en la figura de{' '}
              <strong className="text-[#303030] font-semibold">
                don Bernardo Moreno de Pedrajas (1745–1818)
              </strong>
              , sacerdote y vicario de la parroquia de San Miguel Arcángel. En una época especialmente dura,
              caracterizada por crisis económicas, hambrunas y epidemias, don Bernardo entendió la caridad
              cristiana como una forma de vida.
            </p>
            <p className="mb-0 text-[#5a5a6e] leading-[1.8] text-[1.0575rem] lg:text-[1.1925rem]">
              Gracias a una gestión austera de su patrimonio, destinó sus bienes a aliviar el sufrimiento
              de los pobres, enfermos y desamparados. Esta vocación culminó en su testamento (1817–1818),
              donde dejó dispuesto el nacimiento del Hospital de Jesús Nazareno.
            </p>
          </div>

          {/* Fila 2: imagen derecha (en móvil aparece tercera, en desktop va a col 2 fila 2) */}
          <div ref={reveal3} className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(100,6,121,0.12)] animate-on-scroll local-reveal reveal-top delay-2 lg:order-4">
            <img
              src={closeupHands}
              alt="Atención y cuidado a residentes del Hospital de Jesús Nazareno"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Fila 2: card izquierda (en móvil aparece cuarta, en desktop va a col 1 fila 2) */}
          <div ref={reveal4} className="bg-[#f4f1fb] rounded-[18px] px-11 py-9 flex flex-col justify-center overflow-hidden animate-on-scroll local-reveal slide-up lg:order-3">
            <h3 className="mb-3.5 text-brand font-semibold text-[clamp(1.2375rem,2.5vw,1.6875rem)] leading-[1.2]">
              Modernización y compromiso actual
            </h3>
            <hr className="border-0 border-t-2 border-brand/20 mb-5" />
            <p className="mb-3 text-[#5a5a6e] leading-[1.8] text-[1.0575rem] lg:text-[1.1925rem]">
              Entre 1999 y 2007 se llevaron a cabo importantes obras de reforma que culminaron con la
              construcción del edificio actual, concebido para albergar una residencia de personas mayores
              con instalaciones modernas, accesibles y funcionales.
            </p>
            <p className="mb-0 text-[#5a5a6e] leading-[1.8] text-[1.0575rem] lg:text-[1.1925rem]">
              Hoy, el hospital sigue caminando fiel a su origen cristiano, implementando el modelo de{' '}
              <strong className="text-[#303030] font-semibold">
                Atención Centrada en la Persona (ACP)
              </strong>
              , que sitúa a cada residente en el centro del cuidado, respetando sus gustos, preferencias,
              historia de vida y decisiones.
            </p>
          </div>

        </div>

        <div className="h-[clamp(72px,12vw,144px)]" />
      </div>
    </section>
  );
}
