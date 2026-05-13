import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <Servicios />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
