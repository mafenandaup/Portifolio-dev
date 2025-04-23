import './Contact.css'
import React from 'react';
import GHLogo from "../../../../assets/imgs/githubicon.png";
import LKDLogo from "../../../../assets/imgs/linkedinicon.png";
import EMAILLogo from "../../../../assets/imgs/emailicon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <>
            <footer>
                <div className='social-media'>
                    <h1>Saiba onde me encontrar</h1>
                    <div className='logos'>
                        <a href="https://www.linkedin.com/in/mariafpm/" target="_blank" aria-label='Linkedin' rel="noopener noreferrer"><img src={LKDLogo} className='logo-adjust' alt="lINKEDIN-LOGO" /></a>
                        <a href="https://github.com/mafenandaup" target="_blank" aria-label='Github' rel="noopener noreferrer"><img src={GHLogo} className='logo-adjust' alt="GITHUB-LOGO" /></a>
                        <a href="mailto:mariafernandapmaia@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"><img src={EMAILLogo} className='logo-adjust' alt="EMAIL-LOGO" /></a>
                    </div>
                </div>
                <div className='social-media'>
                    <h1>Quick Links</h1>
                    <a href='#projects'>
                        <FontAwesomeIcon icon={faAngleRight} className='arrow-icon' />  Projetos
                    </a>
                    <a href='#about'>
                        <FontAwesomeIcon icon={faAngleRight} className='arrow-icon' />  Sobre Mim
                    </a>
                    <a href='#contact'>
                        <FontAwesomeIcon icon={faAngleRight} className='arrow-icon' /> Minhas Redes
                    </a>
                    <a href='#home'>
                        <FontAwesomeIcon icon={faAngleRight} className='arrow-icon' />  Home
                    </a>
                    <a href='#contact'>
                        <FontAwesomeIcon icon={faAngleRight} className='arrow-icon' />  Skills
                    </a>
                </div>

                <div className='social-media' id='copyright'>
                    <p className='copyright-p'>&copy;2025 Maria Fernanda Maia - Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default Contact;
