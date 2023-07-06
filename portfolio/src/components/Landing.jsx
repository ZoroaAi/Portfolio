
import { motion } from 'framer-motion';


import person from '../assets/parallax/person.svg';
import '../styles/landing.scss';

import { SectionWrapper } from '../hoc';

function Landing(){

  return(
    <div className='hero'>
      <div className="hero_main">
        <div className="hero_text">
          <h1 className="intro">Hi! I'm Saurav.</h1>
          <p>Computer Science Graduate | Web Developer</p>
          <button><a href="#contact">Get in Touch</a></button>
        </div>
        <img src={person} alt="Person" style={{ maxWidth: '50%' }} className="bobbing" />
      </div>

      <div className="scroll_button">
        <a href="#about">
          <div className="button">
            <motion.div 
              animate={{
                y: [0, 20, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                reapeatType: 'loop'
              }}
              className= "button_circle"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default SectionWrapper(Landing, 'home');