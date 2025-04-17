import './About.css'
import iconImage from "../../../../assets/imgs/icon.jpg";

function About() {
    return (
        <>
            <section>
                <img src={iconImage} alt="foto da autora" />
                <article>
                    <h1>Além do Código</h1>
                    <p>Maria Fernanda, Front-end Developer</p><br />
                    <p>Meu foco é entregar projetos que possuam não apenas utilidade, mas também uma estética. Seja resolvendo problemas complexos ou me expressando criativamente, estou constantemente em processo de aprendizado :) </p>
                </article>
            </section>
        </>
    );
}

export default About;
