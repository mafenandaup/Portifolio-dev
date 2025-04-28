import './About.css'
import iconImage from "../../../../assets/imgs/icon.jpg";

function About() {
    return (
        <>
            <section id='about'>
                <img src={iconImage} alt="foto da autora" className='autor-img' />
                <article>
                    <h1>Além do Código</h1>
                    <p>Maria Fernanda, Front-end Developer</p><br />
                    <p>Sou uma entusiasta de design e gatinhos (altera isso depois pfv)</p><br />
                    <p>Meu foco é entregar projetos que possuam não apenas utilidade, mas também uma estética refinada e coesão nos elementos visuais. </p><br />
                    <p>Seja resolvendo problemas complexos ou me expressando criativamente, estou sempre aprendendo e cada vez mais me aprimorando como profissional. </p>
                    <div className='formacao-cv'>
                        <div className='formacao'></div>
                        <div className='formacao'></div>
                    </div>
                </article>

            </section>
        </>
    );
}

export default About;
