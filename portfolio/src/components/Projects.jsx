import { Tilt } from 'react-tilt';
import { motion} from 'framer-motion';

import { github } from '../assets';

import { SectionWrapper } from '../hoc';
import { projects } from '../constants/constant';
import { fadeIn, textVariant } from '../utils/motion';

import '../styles/projects.scss';

const ProjectCard = ({index, totalCount, name, description, tags, image, link}) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index*0.5, 0.75)}>
            <Tilt 
                options={{
                    max: 45,
                    scale: 1.03,
                    speed: 450
                }}
                className='tilt'
            >
                <div className="card_img_wrapper">
                    <img 
                        src={image} 
                        alt={name} 
                        className={index === totalCount - 1 ? 'card_img last_img' : 'card_img'}
                    />
                </div>

                <div className="card_desc">
                    <h3>
                        {name}  
                        <span>
                            <img 
                                src={github} 
                                alt="github_icon" 
                                className='github_icon' 
                                onClick={() => window.open(link, '_blank')}
                            />
                        </span>
                    </h3> 
                    <p>{description}</p>
                </div>

                <div className='card_tags'>
                    {tags.map((tag) => (
                        <p
                        key={`${name}-${tag.name}`}
                        className={`tag_colour ${tag.color}`}
                        >
                        #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

function Projects() {
    return (
        <div className='projects_wrapper'>
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
                        key={`project-${index}`}
                        index={index}
                        totalCount={projects.length}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
}


export default SectionWrapper(Projects, '');