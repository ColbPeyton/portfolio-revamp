import React, {useRef} from 'react';
import { WidthProvider } from './contexts/WidthContext';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import './App.css';

function App() {

  const headerFef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (ref:any):void => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="container-app">
      <WidthProvider>
        <header className='container-app-header' ref={headerFef}>
          <Header />
        </header>
        <div className='container-app-about' ref={aboutRef}>
          <About />
        </div>
        <div className='container-app-projects' ref={projectsRef}>
          <Projects />
        </div>
        <footer className='container-app-footer' ref={footerRef}>
          <Footer />
        </footer>
      </WidthProvider>
    </div>
  );
}

export default App;
