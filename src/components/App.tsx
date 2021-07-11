import React, { useRef } from 'react';
import { WidthProvider } from '../contexts/WidthContext';
import { Header } from './Header';
import { About } from './About';
import { Projects } from './Projects';
import { Scroll } from './Scroll';
import { Footer } from './Footer';
import '../styles/App.scss';

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (ref: any): void => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container-app">
      <WidthProvider>
        <header className="container-app-header" ref={headerRef}>
          <Header aboutRef={aboutRef} scrollToComponent={scrollToComponent} />
        </header>
        <Scroll
          scrollToComponent={scrollToComponent}
          refs={{ headerRef, aboutRef, projectsRef, footerRef }}
        />
        <div className="container-app-about" ref={aboutRef}>
          <About />
        </div>
        <div className="container-app-projects" ref={projectsRef}>
          <Projects />
        </div>
        <footer className="container-app-footer" ref={footerRef}>
          <Footer />
        </footer>
      </WidthProvider>
    </div>
  );
}

export default App;
