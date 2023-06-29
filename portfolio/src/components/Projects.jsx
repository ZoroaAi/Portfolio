import {useState} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { github } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { SectionWrapper } from '../hoc';
import { projects } from '../constants/constant';
import { fadeIn, textVariant } from '../utils/motion';

import '../styles/projects.scss';

const ProjectCard = (index, name, description, tags, image, link) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index*0.5, 0.75)}>
            test
        </motion.div>
    )
}

function Projects() {
    return (
        <>
            <motion.div className='myProjects' variants={textVariant()}>
                <p>
                    My work
                </p>
                <h2>
                    Projects.
                </h2>
            </motion.div>

            <div className="project_desc">
                <motion.p
                    variants={fadeIn('','',0.1,1)}
                    className='description'
                >
                    The following projects showcase my skills and experience 
                    gathered through real-world examples of my work. Each 
                    project is briefly described with links to the code 
                    repositories. It reflects my ability to solve problems and 
                    work with different technologies, and manage projects effectively. 
                </motion.p>
            </div>

            <div className="project_cards">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={'project-${index}'}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
}


export default SectionWrapper(Projects, '');