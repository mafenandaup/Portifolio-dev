import { Project } from './Project';
import './Projects.css'
import { project } from './Projects.json'
import React from 'react';

function Projects() {
    return (
        <>

            <section className='section-projects' id='projects'>
                <h1>Meus projetos:</h1>
                <div className="project-cont">
                {project.map((project) => (
                    <Project key={project.title} title={project.title} img={project.img} desc={project.desc} srccode={project.srccode} ytlink={project.ytlink}/>
                ))}
                </div>
            </section>
        </>
    )
}


export default Projects