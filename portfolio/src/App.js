import './App.scss';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'

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
      </div>
    </div>
  );
}

export default App;
