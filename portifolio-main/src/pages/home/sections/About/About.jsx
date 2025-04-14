import './About.css'
import iconImage from "../../../../assets/imgs/icon.jpg";

function About() {
    return (
        <>
            <section>
                <img src={iconImage} alt="foto da autora" />
                <article>
                    <h1>Além do Código</h1>
                    <p>Maria Fernanda, Front-end Developer</p><br />
                    <p>hello</p>
                </article>
            </section>
        </>
    );
}

export default About;
