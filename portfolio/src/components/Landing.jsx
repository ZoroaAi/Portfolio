
import { motion } from 'framer-motion';

import { person_dark } from '../assets';
import '../styles/landing.scss';

function Landing(){
  return(
    <div className='hero' id='home'>
      <div className="hero_main">
        <div className="hero_text">
          <h1 className="intro">Hi! I'm Saurav.</h1>
          <p>Computer Science Graduate | Web Developer</p>
          <a href="#contact" className='hero_button'>Get in Touch</a>
        </div>
        <div className="person_clouds">
          {/* {darkMode ?
            <img src={person_dark} alt="Person" style={{ maxWidth: '80%' }} className="hero_img bobbing" />
            : <img src={person} alt="Person" style={{ maxWidth: '80%' }} className="hero_img bobbing" />
          } */}
          <img src={person_dark} alt="Person" style={{ maxWidth: '80%' }} className="hero_img bobbing" />
          {/* <img src={clouds} alt="cloud" className='hero_cloud_1 '/> */}
        </div>
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

export default Landing;