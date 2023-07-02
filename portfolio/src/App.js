import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
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


function App() {
  const [isLoading, setisLoading] = useState(false);
  return (
    <PageLoader />
    // <BrowserRouter>
    //   <div>
    //     <div className='hero'>
    //       <Navbar/>
    //       <Landing/>
    //     </div>
    //     <AboutMe />
    //     <Experience />
    //     <Projects />
    //     <Skills />
    //     <div class="contact-section">
    //       <Contact />
    //       <StarCanvas />
    //     </div>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
