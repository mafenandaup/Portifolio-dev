import './Skills.css'
import { Skill } from './Skill'
import { skill } from './Skills.json'

function Skills() {
    return (
        <>
            <section className="section-skills" id="skills">
                <h1>Minhas habilidades:</h1>
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