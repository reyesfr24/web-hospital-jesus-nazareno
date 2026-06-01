import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Servicios from './components/Servicios';
import Footer from './components/Footer';

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

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <Servicios />
      </main>
      <Footer />
    </>
  );
}
