import './Contact.css'
import React from 'react';
import GHLogo from "../../../../assets/imgs/githubicon.png";
import LKDLogo from "../../../../assets/imgs/linkedinicon.png";
import EMAILLogo from "../../../../assets/imgs/emailicon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import { motion, scale, stagger } from "framer-motion";


function Contact() {
    return (
        <>
            <footer id='contact'>
                <div className='social-media'>
                    <h1>Saiba onde me encontrar</h1>
                    <div className='logos'>
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/mariafpm/" target="_blank" aria-label='Linkedin' rel="noopener noreferrer"><img src={LKDLogo} className='logo-adjust' alt="lINKEDIN-LOGO" /></motion.a >
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://github.com/mafenandaup" target="_blank" aria-label='Github' rel="noopener noreferrer"><img src={GHLogo} className='logo-adjust' alt="GITHUB-LOGO" /></motion.a >
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="mailto:mariafernandapmaia@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"><img src={EMAILLogo} className='logo-adjust' alt="EMAIL-LOGO" /></motion.a >
                    </div>
                </div>
                <div className='social-media'>
                    <h1>Quick Links</h1>
                    <motion.a  whileTap={{ scale: 0.9 }} href='#projects'>
                        <FontAwesomeIcon icon={faAngleRight} className='arrow-icon' />  Projetos
                    </motion.a >
                    <motion.a  whileTap={{ scale: 0.9 }} href='#about'>
                        <FontAwesomeIcon icon={faAngleRight} className='arrow-icon' />  Sobre Mim
                    </motion.a >
                    <motion.a  whileTap={{ scale: 0.9 }} href='#home'>
                        <FontAwesomeIcon icon={faAngleRight} className='arrow-icon' />  Home
                    </motion.a >
                    <motion.a  whileTap={{ scale: 0.9 }} href='#skills'>
                        <FontAwesomeIcon icon={faAngleRight} className='arrow-icon' />  Skills
                    </motion.a >
                </div>

                <div className='social-media' id='copyright'>
                    <p className='copyright-p'>&copy;2025 Maria Fernanda Maia - Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default Contact;
