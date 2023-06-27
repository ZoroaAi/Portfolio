// import stars from '../assets/parallax/stars.svg';
import person from '../assets/parallax/person.svg';
import '../styles/landing.scss';

import { SectionWrapper } from '../hoc';

function Landing(){
    return(
      <>

      <h1 className="intro-text">Hi! I'm Saurav.</h1>
      <img src={person} alt="Person" style={{ maxWidth: '50%' }} className="bobbing" />

      </>
    )
}

export default SectionWrapper(Landing, 'home');