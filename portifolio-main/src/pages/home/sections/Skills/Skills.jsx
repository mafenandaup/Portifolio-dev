import './Skills.css'
import { Skill } from './Skill'
import { skill } from './Skills.json'
// eslint-disable-next-line no-unused-vars
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

function Skills() {
    return (
        <>
        <section className="section-skills" id="skills">
            <h1>Minhas habilidades:</h1>
            <motion.div
                className="skills-cont"
                variants={skillVariants} 
                initial="hidden"
                whileInView="visible" 
                exit="hidden" 
                viewport={{ once: true, amount: 0.4 }} 
            >
                {skill.map((skillItem) => (
                    <motion.div 
                        key={skillItem.title} 
                        variants={itemVariants} 
                    >
                        <Skill title={skillItem.title} image={skillItem.image} />
                    </motion.div>
                ))}
            </motion.div>
            </section>
        </>
    )
}

export default Skills