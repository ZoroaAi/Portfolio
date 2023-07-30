import { motion } from 'framer-motion';

import '../styles/about.scss';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import RoomCanvas from './canvas/RoomCanvas';

function AboutMe(){
    return(
        <div className="aboutMe">
            <motion.div className="about-info" variants={textVariant()}>
                <p className='about_subText'>Who I Am</p>
                <h2>About Me.</h2>
                <motion.p>Hello, I'm Saurav KC, soon to be graduating with a degree in Computer Science from the University of Portsmouth. My journey in this diverse field has led me to discover a increasing appreciation for the art and science of web design and development.
                <br/><br/>This passion isn't just theoretical, it has driven me to explore a wide variety of tech stacks and apply them in practical settings, making each project a unique blend of creativity and functionality.
                Feel free to explore more about me and my work. I'm excited about the opportunities ahead and I welcome any conversations about how my passion and skills could meet your needs.
                </motion.p>
            </motion.div>
            <div className="about-img">
                <motion.div className='room_wrapper' variants={fadeIn('up', 'spring',0.8,0.75)}>
                    <RoomCanvas/>
                </motion.div>
            </div>
        </div>
    )
}

export default SectionWrapper(AboutMe, 'about');