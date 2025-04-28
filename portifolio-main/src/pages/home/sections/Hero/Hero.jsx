import './Hero.css'
import logoImage from "../../../../assets/imgs/nicelogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import cv from '../Hero/curriculum.pdf'
// eslint-disable-next-line no-unused-vars
import { motion, scale } from "framer-motion";



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
                    <img src={logoImage} alt="catlogo" />
                </div>
            </nav>

            <section className='hero-contain' id='home'>
                <div className='button-container'>
                    <motion.button whileHover={{scale: 1.1}} className='action-button'>
                        <a href="mailto:mariafernandapmaia@gmail.com" aria-label='Mail'>
                            <h3>ENTRE EM CONTATO</h3> <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </motion.button>

                    <motion.button whileHover={{scale: 1.1}}  className='action-button'>
                        <a href={cv} download={cv} aria-label='Curriculum'>
                            <h3>DOWNLOAD CV</h3> <FontAwesomeIcon icon={faEnvelopeOpenText} />
                        </a>
                    </motion.button>
                </div>
            </section>
        </>
    );
}

export default Hero;
