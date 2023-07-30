import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import '../styles/about.scss';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import RoomCanvas from './canvas/RoomCanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

import { room } from '../assets';

function AboutMe(){
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const closeModal = () => setIsModalOpen(false);
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
                <button className='room_img_link' onClick={() => setIsModalOpen(true)}>
                    <FontAwesomeIcon className='image_icon' icon={faImages}/>
                </button>
            </div>
            <AnimatePresence>
                {isModalOpen && (
                <motion.div 
                    className='room_modal'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal} 
                >
                    <img 
                        src={room} 
                        alt="Modal Content" 
                        style={{ 
                            maxHeight: "80vh",
                            maxWidth: "80vw",
                            objectFit: "contain"
                        }}
                    />
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SectionWrapper(AboutMe, 'about');