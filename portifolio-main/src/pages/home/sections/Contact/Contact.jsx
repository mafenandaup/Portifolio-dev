import './Contact.css'
import GHLogo from "../../../../assets/imgs/githubicon.png";
import LKDLogo from "../../../../assets/imgs/linkedinicon.png";
import EMAILLogo from "../../../../assets/imgs/emailicon.png";

function Contact() {
    return (
        <>
            <footer>
                <div className='social-media'>
                    <h1>Saiba onde me encontrar:</h1>
                    <div className='logos'>
                        <a href="https://www.linkedin.com/in/mariafpm/" target="_blank" aria-label='Linkedin' rel="noopener noreferrer"><img src={LKDLogo} className='logo-adjust' alt="lINKEDIN-LOGO" /></a>
                        <a href="https://github.com/mafenandaup" target="_blank" aria-label='Github' rel="noopener noreferrer"><img src={GHLogo} className='logo-adjust' alt="GITHUB-LOGO" /></a>
                        <a href="mailto:mariafernandapmaia@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"><img src={EMAILLogo} className='logo-adjust' alt="EMAIL-LOGO" /></a>
                    </div>
                </div>
                <span></span>
                <div className='social-media'>
                    <h1>Saiba onde me encontrar:</h1>
                </div>
                <span></span>
                <div className='social-media' id='copyright'>
                    <p className='copyright-p'>&copy;Maria Fernanda Maia. Todos os direitos reservados</p>
                </div>
                <span></span>
            </footer>
        </>
    );
}

export default Contact;
