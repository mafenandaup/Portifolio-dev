import './About.css'
import iconImage from "../../../../assets/imgs/icon.jpg";

function About() {
    return (
        <>
            <section>
                <img src={iconImage} alt="foto da autora" />
                <article>
                    <h1>Quem Sou Eu?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem nihil perspiciatis impedit est necessitatibus hic! Quis, officia unde molestiae ad architecto explicabo cumque id neque iure recusandae dignissimos laborum.</p>
                </article>
            </section>
        </>
    );
}

export default About;
