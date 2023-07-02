import { useState, useEffect } from 'react';
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

const  MainContent = () => {
  return (
    <BrowserRouter>
      <div>
        <div className='hero'>
          <Navbar/>
          <Landing/>
        </div>
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <div className="contact-section">
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
    <>
      <AnimatePresence>
        {isLoading && <PageLoader loading={isLoading} />}
      </AnimatePresence>
      {!isLoading && <MainContent />}
    </>
  );
}

export default App;
