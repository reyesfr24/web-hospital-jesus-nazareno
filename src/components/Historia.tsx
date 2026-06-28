import iglesiaInterior from '../assets/images/iglesia-interior.webp';
import closeupHands from '../assets/images/closeup-support-hands.webp';

const HL = ({ text }: { text: string }) => (
  <span className="text-brand bg-accent/25 rounded-[6px] px-2">
    {text}
  </span>
);

export default function Historia() {
  return (
    <section id="historia" className="bg-white">
      <div className="px-[clamp(24px,4vw,48px)]">

        <div className="h-[clamp(80px,12vw,50px)]" />

        {/* Cabecera centrada */}
        <div className="animate-on-scroll text-center">
          <p className="m-0 mb-4 text-brand text-[0.8125rem] font-semibold tracking-[0.12em] uppercase">
            Desde 1819
          </p>
          <h2 className="m-0 text-text-dark font-semibold text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em]">
            <HL text="Nuestra Historia" />
          </h2>
          <div className="h-6" />
          <p className="m-0 mx-auto text-[#757575] text-lg leading-[1.75] max-w-[620px]">
            Más de dos siglos de vocación de servicio, guiados por la fe cristiana y el amor a los más necesitados.
          </p>
        </div>

        <div className="h-[clamp(60px,8vw,100px)]" />

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 gap-6 max-w-[1000px] mx-auto lg:grid-cols-2 lg:[grid-template-rows:600px_600px] lg:gap-x-8 lg:gap-y-10">

          {/* Fila 1: imagen izquierda */}
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(100,6,121,0.12)] animate-on-scroll">
            <img
              src={iglesiaInterior}
              alt="Interior de la iglesia del Hospital de Jesús Nazareno"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Fila 1: card derecha */}
          <div className="bg-[#f4f1fb] rounded-[20px] px-12 py-10 flex flex-col justify-center overflow-hidden animate-on-scroll delay-2">
            <h3 className="mb-4 text-brand font-semibold text-[clamp(1.375rem,2.5vw,1.875rem)] leading-[1.2]">
              El origen cristiano
            </h3>
            <hr className="border-0 border-t-2 border-brand/20 mb-6" />
            <p className="mb-3.5 text-[#5a5a6e] leading-[1.8] text-[1.0625rem]">
              El Hospital de Jesús Nazareno tiene su origen en la figura de{' '}
              <strong className="text-[#303030] font-semibold">
                don Bernardo Moreno de Pedrajas (1745–1818)
              </strong>
              , sacerdote y vicario de la parroquia de San Miguel Arcángel. En una época especialmente dura,
              caracterizada por crisis económicas, hambrunas y epidemias, don Bernardo entendió la caridad
              cristiana como una forma de vida.
            </p>
            <p className="mb-0 text-[#5a5a6e] leading-[1.8] text-[1.0625rem]">
              Gracias a una gestión austera de su patrimonio, destinó sus bienes a aliviar el sufrimiento
              de los pobres, enfermos y desamparados. Esta vocación culminó en su testamento (1817–1818),
              donde dejó dispuesto el nacimiento del Hospital de Jesús Nazareno.
            </p>
          </div>

          {/* Fila 2: card izquierda */}
          <div className="bg-[#f4f1fb] rounded-[20px] px-12 py-10 flex flex-col justify-center overflow-hidden animate-on-scroll">
            <h3 className="mb-4 text-brand font-semibold text-[clamp(1.375rem,2.5vw,1.875rem)] leading-[1.2]">
              Modernización y compromiso actual
            </h3>
            <hr className="border-0 border-t-2 border-brand/20 mb-6" />
            <p className="mb-[14px] text-[#5a5a6e] leading-[1.8] text-[1.0625rem]">
              Entre 1999 y 2007 se llevaron a cabo importantes obras de reforma que culminaron con la
              construcción del edificio actual, concebido para albergar una residencia de personas mayores
              con instalaciones modernas, accesibles y funcionales.
            </p>
            <p className="mb-0 text-[#5a5a6e] leading-[1.8] text-[1.0625rem]">
              Hoy, el hospital sigue caminando fiel a su origen cristiano, implementando el modelo de{' '}
              <strong className="text-[#303030] font-semibold">
                Atención Centrada en la Persona (ACP)
              </strong>
              , que sitúa a cada residente en el centro del cuidado, respetando sus gustos, preferencias,
              historia de vida y decisiones.
            </p>
          </div>

          {/* Fila 2: imagen derecha */}
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(100,6,121,0.12)] animate-on-scroll delay-2">
            <img
              src={closeupHands}
              alt="Atención y cuidado a residentes del Hospital de Jesús Nazareno"
              className="w-full h-full object-cover block"
            />
          </div>

        </div>

        <div className="h-[clamp(80px,12vw,160px)]" />
      </div>
    </section>
  );
}
