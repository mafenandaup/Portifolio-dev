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
                        <img src={LKDLogo} className='logo-adjust' alt="lINKEDIN-LOGO" />
                        <img src={GHLogo} className='logo-adjust' alt="GITHUB-LOGO" />
                        <img src={EMAILLogo} className='logo-adjust' alt="EMAIL-LOGO" />
                    </div>
                </div>
                <div className='social-media'>
                    <h1>Saiba onde me encontrar:</h1>
                </div>
                <div className='social-media'>
                    <h1>Saiba onde me encontrar:</h1>
                </div>
            </footer>
        </>
    );
}

export default Contact;
