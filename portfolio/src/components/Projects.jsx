import {useState} from 'react';
import React from 'react';
import List from './ProjectList';
import '../styles/projects.scss';

function Projects() {
    const [projects] = useState(List);
    
    return (
        <div className='portfolio-grid'>
            <h2 className='section-title'>Projects</h2>

            <div className='project-container'>
                {projects.map((elem) => {
                    const{ id, title, description, imgURL, projectURL} = elem;
                    return (
                        <div className='project-card' key={id}>
                            <div className='project-thumbnail'>
                                <img src={imgURL} className='project-img' alt='' />
                                <div className='project-mask'></div>
                            </div>

                            <h3 className="project-title">{title}</h3>
                            <h4 className="project-desc">{description}</h4>
                            <a href={projectURL} className="project-button">
                                <i className='icon-link project-button-icon'></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div> 
    );
}


export default Projects;