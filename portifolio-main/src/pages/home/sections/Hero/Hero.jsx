import './Hero.css'
import logoImage from "../../../../../public/assets/imgs/nicelogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import cv from '../Hero/curriculum.pdf'
// eslint-disable-next-line no-unused-vars
import { motion, scale } from "framer-motion";

const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 }, },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" }, // Inicialmente invisível e com blur
    visible: {
        opacity: 1,
        filter: "blur(0px)", // Aparece gradualmente e remove o blur
        transition: { duration: 1, ease: "easeInOut" }, // Duração de 1s
    },
};

function Hero() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-links'>
                    <a href='#home'>Home</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projetos</a>
                    <a href='#about'>Sobre Mim</a>
                    <a href='#contact'>Minhas Redes</a>
                </div>
                <div className='mylogo'>
                </div>
            </nav>

            <section className='hero-contain' id='home'>
                <div className='logo-btns'>
                    <motion.img animate={{
                        rotate: [5, -7, 5, -7, 5],
                    }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }} src={logoImage} alt="catlogo" variants={skillVariants} initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true, amount: 0.4 }} className='my-logo' />
                    <motion.h1
                        variants={blurVariants}
                        initial="hidden"
                        animate="visible">Maria Fernanda Maia</motion.h1>
                    <motion.h3
                        className='typewriter'
                        variants={blurVariants}
                        initial="hidden"
                        animate="visible"> Web Developer, Front-End Developer & Graphic Designer.</motion.h3>
                    <motion.div className='button-container'  variants={blurVariants}
                        initial="hidden"
                        animate="visible">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className='action-button'>
                            <a href="mailto:mariafernandapmaia@gmail.com" aria-label='Mail'>
                                <h3>ENTRE EM CONTATO</h3> <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </motion.button>

                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className='action-button'>
                            <a href={cv} download={cv} aria-label='Curriculum'>
                                <h3>DOWNLOAD CV</h3> <FontAwesomeIcon icon={faEnvelopeOpenText} />
                            </a>
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default Hero;
