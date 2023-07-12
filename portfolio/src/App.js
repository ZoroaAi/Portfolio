import { useState, useEffect, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.scss';

import PageLoader from './components/Loaders/PageLoader';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarCanvas from './components/canvas/StarCanvas';
import { DarkModeContext, DarkModeProvider } from './components/dark_mode/DarkMode';

const  MainContent = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark-theme' : ''}>
        <Navbar/>
        <Landing/>
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <div className="contact">
          <Contact />
          <StarCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <DarkModeProvider>
      <AnimatePresence>
        {isLoading && <PageLoader loading={isLoading} />}
      </AnimatePresence>
      {!isLoading && 
          <MainContent />
      }
    </DarkModeProvider>
  );
}

export default App;
