import { useEffect, useRef, useState } from 'react';
import bustoFrancisco from '../assets/images/centro/busto-francisco.webp';
import capilla from '../assets/images/centro/capilla.webp';
import centro1 from '../assets/images/centro/centro-1.webp';
import centro2 from '../assets/images/centro/centro-2.webp';
import centro3 from '../assets/images/centro/centro-3.webp';
import centro4 from '../assets/images/centro/centro-4.webp';
import centro5 from '../assets/images/centro/centro-5.webp';
import centro6 from '../assets/images/centro/centro-6.webp';
import centro7 from '../assets/images/centro/centro-7.webp';
import fuenteJardin from '../assets/images/centro/fuente-jardin.webp';
import padreJesus1 from '../assets/images/centro/padre-jesus-1.webp';
import padreJesus2 from '../assets/images/centro/padre-jesus-2.webp';

// ratio = alto / ancho, usado para repartir las imágenes en columnas de altura equilibrada
const GALLERY = [
  { src: bustoFrancisco, alt: 'Busto de Don Francisco en el Hospital de Jesús Nazareno', ratio: 2268 / 4032 },
  { src: fuenteJardin, alt: 'Fuente del jardín principal', ratio: 960 / 635 },
  { src: centro1, alt: 'Instalaciones del Hospital de Jesús Nazareno', ratio: 2016 / 1134 },
  { src: capilla, alt: 'Capilla del Hospital de Jesús Nazareno', ratio: 1991 / 1090 },
  { src: centro2, alt: 'Instalaciones del Hospital de Jesús Nazareno', ratio: 1134 / 2016 },
  { src: padreJesus1, alt: 'Imagen del Padre Jesús', ratio: 900 / 2000 },
  { src: centro3, alt: 'Instalaciones del Hospital de Jesús Nazareno', ratio: 1134 / 2016 },
  { src: centro4, alt: 'Instalaciones del Hospital de Jesús Nazareno', ratio: 904 / 1856 },
  { src: padreJesus2, alt: 'Imagen del Padre Jesús', ratio: 4160 / 2336 },
  { src: centro5, alt: 'Instalaciones del Hospital de Jesús Nazareno', ratio: 1134 / 2016 },
  { src: centro6, alt: 'Instalaciones del Hospital de Jesús Nazareno', ratio: 1134 / 2016 },
  { src: centro7, alt: 'Instalaciones del Hospital de Jesús Nazareno', ratio: 932 / 2024 },
];

function useColumnCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const mqLg = window.matchMedia('(min-width: 1024px)');
    const mqSm = window.matchMedia('(min-width: 640px)');

    const update = () => setCount(mqLg.matches ? 3 : mqSm.matches ? 2 : 1);
    update();

    mqLg.addEventListener('change', update);
    mqSm.addEventListener('change', update);
    return () => {
      mqLg.removeEventListener('change', update);
      mqSm.removeEventListener('change', update);
    };
  }, []);

  return count;
}

// Reparte las imágenes asignando cada una a la columna con menor altura
// acumulada, para que las 3 columnas terminen a una altura lo más
// parecida posible (en vez de dejar que CSS `columns` las reparta mal).
function distributeIntoColumns<T extends { ratio: number }>(items: T[], columnCount: number) {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);

  items.forEach((item) => {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(item);
    heights[shortest] += item.ratio;
  });

  return columns;
}

// Observer local para la galería: se re-conecta cada vez que cambia el
// reparto de columnas (p.ej. al pasar de 3 a 1 columna en móvil), así no
// depende del escaneo único que hace App.tsx al montar la página.
function useGalleryReveal(containerRef: React.RefObject<HTMLDivElement | null>, dep: number) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    el.querySelectorAll('.animate-on-scroll').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [containerRef, dep]);
}

const HL = ({ text }: { text: string }) => (
  <span className="text-brand bg-accent/25 rounded-[6px] px-2">
    {text}
  </span>
);

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
      <p className="m-0 mb-4 text-brand text-[0.8125rem] font-semibold tracking-[0.12em] uppercase">
        Conócenos
      </p>
      <h2 className="m-0 text-text-dark font-semibold text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em]">
        <HL text="Nuestro Centro" />
      </h2>
      <div className="h-6" />
      <p className="m-0 mx-auto text-[#757575] text-lg leading-[1.75] max-w-[620px]">
        Un espacio pensado para el bienestar, la vida en comunidad y la fe, donde cada rincón acompaña el
        día a día de nuestros residentes.
      </p>
    </div>
  );
}

export default function NuestroCentro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnCount = useColumnCount();
  const columns = distributeIntoColumns(GALLERY, columnCount);
  useGalleryReveal(containerRef, columnCount);

  return (
    <section id="centro" className="bg-white">
      <div className="px-[clamp(24px,4vw,48px)]">

        <div className="h-[clamp(80px,12vw,50px)]" />

        {/* Cabecera centrada */}
        <HeaderBlock />

        <div className="h-[clamp(60px,8vw,100px)]" />

        {/* Galería: 3 columnas con altura equilibrada por JS */}
        <div ref={containerRef} className="flex gap-6 max-w-[1350px] mx-auto">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-1 flex-col gap-6">
              {column.map((image, index) => (
                <div
                  key={image.src}
                  className={`rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(100,6,121,0.12)] animate-on-scroll delay-${(index % 3) + 1}`}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-auto object-cover block" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="h-[clamp(80px,12vw,160px)]" />
      </div>
    </section>
  );
}
