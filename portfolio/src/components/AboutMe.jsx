import '../styles/about.scss';
import { SectionWrapper } from '../hoc';

function AboutMe(){
    return(
        <div className="aboutMe">
            <div className="about-info">
                <h2>About Me</h2>
                <p>Hello, I'm Saurav KC, soon to be graduating with a degree in Computer Science from the University of Portsmouth. My journey in this diverse field has led me to discover a increasing appreciation for the art and science of web design and development.
                <br/><br/>This passion isn't just theoretical, it has driven me to explore a wide variety of tech stacks and apply them in practical settings, making each project a unique blend of creativity and functionality.
                Feel free to explore more about me and my work. I'm excited about the opportunities ahead and I welcome any conversations about how my passion and skills could meet your needs.
                </p>
            </div>
            <div className="about-img">
                <div>Placeholder for 3d image</div>
            </div>
        </div>
    )
}

export default SectionWrapper(AboutMe, 'about');