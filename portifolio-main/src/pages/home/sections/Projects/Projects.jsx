import { Project } from './Project';
import './Projects.css'
import { project } from './Projects.json'
import React from 'react';
import { motion, scale, stagger } from "framer-motion";

const skillVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

function Projects() {
    return (
        <>

            <section className='section-projects' id='projects'>
                <h1>Meus projetos:</h1>
                <motion.div className="project-cont"
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    viewport={{ once: true, amount: 0.4 }}>
                    {project.map((project) => (
                        <Project key={project.title} title={project.title} img={project.img} desc={project.desc} srccode={project.srccode} ytlink={project.ytlink} />
                    ))}
                </motion.div>
            </section>
        </>
    )
}


export default Projects