import './About.css'
import iconImage from "../../../../../public/assets/imgs/icon.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";


const imgTransition = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3} },
    exit: { opacity: 0, x: 50, transition: { duration: 0.4 } }, 
};

function About() {
    const ref = useRef(null); // Referência ao elemento
    const isInView = useInView(ref, { once: true }); // Detecta quando o elemento entra na viewport
    
    return (
        <>
            <section id='about'>
                <motion.img ref={ref} variants={imgTransition} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit"src={iconImage} alt="foto da autora" className='autor-img' />
                <article>
                    <h1>Além do Código</h1>
                    <p>Maria Fernanda, Front-end Developer</p><br />
                    <p>Graduanda em Engenharia de Software pela UCSAL, sou uma profissional imersa na busca por ressonância entre design e funcionalidade, priorizando a simplicidade e a excelência na experiência do usuário.</p><br />
                    <p>Meu foco é entregar projetos que sejam não só úteis, mas que também tenham uma estética refinada, intuitiva e coesão nos elementos visuais. </p><br />
                    <p>Seja resolvendo problemas complexos ou me expressando criativamente, estou sempre aprendendo e cada vez mais me aprimorando como profissional. </p>
                </article>

            </section>
        </>
    );
}

export default About;
