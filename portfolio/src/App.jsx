import { useState, useContext } from 'react';
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
import { Loading, LoadingProgressContext } from './components/Loaders/LoadProgressContext';

const  MainContent = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark-theme' : ''}>
        <Navbar/>
        <div class="stars_relative">
          <Landing/>
          <AboutMe />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <StarCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

function ContentContainer() {
  const {isLoading} = useContext(LoadingProgressContext);
  return (
    <>
      <AnimatePresence>
        {isLoading && <PageLoader isLoading={isLoading} />}
      </AnimatePresence>
      {!isLoading &&
        <MainContent />
      }
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  console.log('App isLoading Before: '+ isLoading);

  return (
    <DarkModeProvider>
      <LoadingProgressContext.Provider value={{isLoading, setIsLoading }}>
        <Loading />
        <ContentContainer />
      </LoadingProgressContext.Provider>
    </DarkModeProvider>
  );
}

export default App;
