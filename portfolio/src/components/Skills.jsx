import { motion } from 'framer-motion';

import '../styles/skills.scss';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants/constant';
import { fadeIn } from '../utils/motion';

const SkillCard = ({index, name, icon}) =>{
    return (
        <motion.div 
            variants={fadeIn('up', 'spring', index*0.5, 0.75)}
        >
            <div className='skill_card'>
                <img src={icon} alt={name} className='skill_img' />
                <span>{name}</span>
            </div>
        </motion.div>
    )
}

function Skills(){
    return(
        <div className="skills">
            <div className="skills_heading">
                <p>What I Know</p>
                <h2>Skills.</h2>
            </div>
            <div className="skill_display">
                {technologies.map((skill, index) => (
                    <SkillCard 
                        key={index}
                        index={index}
                        {...skill}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Skills, 'skills');