import '../styles/skills.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillCircle from './SkillCircle';

function Skills(){
    const skills = [
        {name: 'HTML', percentage: 90},
        {name: 'CSS', percentage: 85},
        {name: 'JavaScript', percentage: 80},
        {name: 'React', percentage: 75},
        {name: 'Python', percentage: 45},
        {name: 'Java', percentage: 30},
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 950 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return(
        <div className="skills">
            <div className="skills-heading">
                <h2>Skills</h2>
            </div>
            <div className="carousel">
                <Carousel responsive={responsive} infinite={true} className='skill slider'>
                    {skills.map((skill, index) => (
                        <SkillCircle key={index} percentage={skill.percentage} skill={skill.name}/>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Skills;