import { useEffect } from 'react';
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Process from './components/Process';
import Projects from './components/Projects';
import AiWork from './components/AiWork';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Fade sections up as they scroll into view (see [data-reveal] in index.css).
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Banner />
        <About />
        <Process />
        <Projects />
        <AiWork />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
