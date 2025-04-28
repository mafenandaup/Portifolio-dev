import './Skills.css'
import { Skill } from './Skill'
import { skill } from './Skills.json'
import { motion, scale } from "framer-motion";

function Skills() {
    return (
        <>
            <section className="section-skills" id="skills">
                <h1>Minhas habilidades:</h1>
                <motion.p whileHover={{ scale: 1.3 }}>try me</motion.p>
                <div className="skills-cont">
                    {skill.map((skill) => (
                        <Skill key={skill.title} title={skill.title} image={skill.image} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Skills