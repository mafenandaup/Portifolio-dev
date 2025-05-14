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

const titleTransition = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.3} },
    exit: { opacity: 0, y: 50, transition: { duration: 0.4 } }, 
};

const textTransition = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3} },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } }, 
};

function About() {
    const ref = useRef(null); // Referência ao elemento
    const isInView = useInView(ref, { once: true }); // Detecta quando o elemento entra na viewport
    
    return (
        <>
            <section id='about'>
                <motion.img ref={ref} variants={imgTransition} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit"src={iconImage} whileHover={{scale:1.02}} alt="foto da autora" className='autor-img' />
                <article>
                    <motion.h1 ref={ref} variants={titleTransition} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">Além do Código</motion.h1>
                    <motion.p ref={ref} variants={textTransition} initial="hidden" animate={isInView ? "visible" : "hidden"} exit="exit">Maria Fernanda, Front-end Developer</motion.p><br />
                                        <motion.p ref={ref} variants={textTransition} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit"></motion.p>Apaixonada por idiomas, gatinhos, e coisas belas<br />
                    <motion.p ref={ref} variants={textTransition} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">Graduanda em Engenharia de Software pela UCSAL, busco ressonância entre design e funcionalidade, priorizando uma experiência do usuário de excelência</motion.p><br />
                    <motion.p ref={ref} variants={textTransition} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">Meu diferencial é entregar projetos que sejam não só úteis, mas que também tenham uma estética refinada, intuitiva e repleta de identidade visual. </motion.p><br />
                    <motion.p ref={ref} variants={textTransition} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">Seja resolvendo problemas complexos ou me expressando criativamente, estou sempre aprendendo e cada vez mais me aprimorando como profissional. </motion.p>
                </article>

            </section>
        </>
    );
}

export default About;
