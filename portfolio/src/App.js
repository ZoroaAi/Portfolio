import './App.scss';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
      <Navbar/>
      <div class="content">
        <div className="intro">
          <Landing/>
        </div>
        <div className="aboutMe">
          <AboutMe/>
        </div>
        <div className='projects'>
          <Projects/>
        </div>
        <div className='skills-container'>
          <Skills/>
        </div>
        <div className='contact'>
          <Contact/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
