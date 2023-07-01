import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import '../styles/experience.scss';
import { experiences } from '../constants/constant';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({experience}) => {
    return(
        <VerticalTimelineElement 
            className='timeline_elem'
            contentArrowStyle={{borderRight: '7px solid'}}
            date= {experience.date}
            iconStyle={{background: experience.iconBg}}
            icon={
                <div className='icon_container'>
                    <img 
                        src={experience.icon} 
                        alt={experience.company_name}
                        className='exp_icon'
                    />
                </div>
            }
        >
            <div>
                <h3 className='exp_title'>{experience.title}</h3>
            </div>
            <div>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    return(
        <>
            <motion.div className='exp_title' variants={textVariant()}>
                <p >What I have done so far</p>
                <h2>Work Experience.</h2>
            </motion.div>

            <div className="exp">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, '');