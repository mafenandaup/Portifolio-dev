import './Hero.css'
import logoImage from "../../../../assets/imgs/nicelogo.png";

function Hero() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-links'>
                    <a href='#home'>Home</a>
                    <a href='#about'>Projetos</a>
                    <a href='#about'>Sobre Mim</a>
                    <a href='#contact'>Minhas Redes</a>
                </div>
                <div className='mylogo'>
                    <img src={logoImage} alt="catlogo" />
                </div>
            </nav>

            <div className='hero-contain'>
               
            </div>
        </>
    );
}

export default Hero;
