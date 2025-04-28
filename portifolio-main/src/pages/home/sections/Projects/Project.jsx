// eslint-disable-next-line no-unused-vars
import { motion, scale } from "framer-motion";


export function Project({ title, img, desc, ytlink, srccode }) {

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1, transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };


    return (
        <div className="project-item">
            <img src={img} alt={`${title}`} className="project-img" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="button-proj">
                {srccode ? (
                    <motion.button
                        className="has-link"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <a href={srccode} target="_blank" rel="noopener noreferrer">
                            CÓDIGO FONTE
                        </a>
                    </motion.button>
                ) : (
                    <button className="no-link">CÓDIGO-FONTE</button>
                )}

                {/* Booleano para animação dos botões, se não tiver link, não faz o hover scale.*/}
                {ytlink ? (
                    <motion.button
                        className="has-link"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <a href={ytlink} target="_blank" rel="noopener noreferrer">
                            VÍDEO DE DEMONSTRAÇÃO
                        </a>
                    </motion.button>
                ) : (
                    <button className="no-link">VÍDEO DE DEMONSTRAÇÃO</button>
                )}
            </div>
        </div>
    );
}