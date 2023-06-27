import '../styles/skills.scss';
import { SectionWrapper } from '../hoc';

function Skills(){
    return(
        <div className="skills">
            <div className="skills-heading">
                <h2>Skills</h2>
            </div>
            <div className="carousel">

            </div>
        </div>
    )
}

export default SectionWrapper(Skills, 'skills');