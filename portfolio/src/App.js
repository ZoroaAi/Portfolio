import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarCanvas from './components/StarCanvas';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='hero'>
          <Navbar/>
          <Landing/>
        </div>
        <AboutMe />
        <Projects />
        <Skills />
        <div class="contact-section">
          <Contact />
          <StarCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
