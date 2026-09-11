import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Global background decorations */}
      <div className="bg-grid" />
      <div className="bg-noise" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Main content */}
      <Navbar />

      <main>
        <Hero />
        <div className="glow-line" />
        <About />
        <div className="glow-line" />
        <Skills />
        <div className="glow-line" />
        <Projects />
        <div className="glow-line" />
        <Certificates />
        <div className="glow-line" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
