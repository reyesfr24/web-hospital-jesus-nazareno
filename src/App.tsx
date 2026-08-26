import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Servicios from './components/Servicios';
import NuestroCentro from './components/NuestroCentro';
import Footer from './components/Footer';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaCookies from './pages/PoliticaCookies';
import Accesibilidad from './pages/Accesibilidad';
import AyudasRecibidas from './pages/AyudasRecibidas';

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll:not(.local-reveal)');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function HomePage() {
  return (
    <>
      <Hero />
      <Historia />
      <Servicios />
      <NuestroCentro />
    </>
  );
}

const STANDALONE_PAGES: Record<string, () => JSX.Element> = {
  '/aviso-legal': AvisoLegal,
  '/politica-cookies': PoliticaCookies,
  '/accesibilidad': Accesibilidad,
  '/ayudas-recibidas': AyudasRecibidas,
};

export default function App() {
  useScrollAnimation();
  const path = window.location.pathname;
  const StandalonePage = STANDALONE_PAGES[path];

  return (
    <>
      {!StandalonePage && <Navbar />}
      <main>{StandalonePage ? <StandalonePage /> : <HomePage />}</main>
      <Footer />
    </>
  );
}
