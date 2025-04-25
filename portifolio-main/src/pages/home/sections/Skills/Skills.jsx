import './Skills.css'
import { Skill } from './Skill'
import { skill } from './Skills.json'

function Skills() {
    return (
        <>
            <section className='section-skills' id='skills'>
                <h1>Minhas habilidades:</h1>
                <div className='skills-cont'>
                    {skill.map((skill) => {
                        return (
                            <Skill key={skill.title} title={skill.title} img={skill.img}></Skill>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Skills