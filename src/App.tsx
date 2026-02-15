import { useEffect, useState } from 'react';
import './App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import SystemStatus from './components/SystemStatus';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Determine current section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setCurrentSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-bb-black text-bb-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress progress={scrollProgress} />
      
      {/* System Status Indicator */}
      <SystemStatus currentSection={currentSection} />
      
      {/* Grid Background */}
      <div className="fixed inset-0 bb-grid-bg pointer-events-none z-0" />
      
      {/* Scanlines Overlay */}
      <div className="fixed inset-0 bb-scanlines pointer-events-none z-10" />
      
      {/* Main Content */}
      <main className="relative z-20">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
