import { motion } from 'framer-motion';

// import stars from '../assets/parallax/stars.svg';
import person from '../assets/parallax/person.svg';
import '../styles/landing.scss';

import { SectionWrapper } from '../hoc';

function Landing(){
  const motionDiv = document.getElementsByClassName('button_circle');
  if (motionDiv){
    console.log("Motion Div Exists");
  }
  return(
    <>

    <h1 className="intro-text">Hi! I'm Saurav.</h1>
    <img src={person} alt="Person" style={{ maxWidth: '50%' }} className="bobbing" />

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
    </>
  )
}

export default SectionWrapper(Landing, 'home');