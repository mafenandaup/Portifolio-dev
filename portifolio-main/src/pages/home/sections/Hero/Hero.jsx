import './Hero.css'
import logoImage from "../../../../assets/imgs/nicelogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';

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
                    <button className='action-button'>
                        <a href="">
                            <h3>ENTRE EM CONTATO</h3>
                        </a>
                    </button>

                    <button className='action-button'>
                        <a href="">
                            <h3>DOWNLOAD CV</h3> <FontAwesomeIcon icon={faFile} />
                        </a>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Hero;
