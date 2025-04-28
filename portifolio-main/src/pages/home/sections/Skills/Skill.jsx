// eslint-disable-next-line no-unused-vars
import { motion, scale, stagger } from "framer-motion";

export function Skill({ title, image }) {
    return (
        <motion.div whileHover={{scale: 1.04} } className="skill-item">
            <img src={image} alt={`${title} logo`} className="skill-icon" />
            <h2>{title}</h2>
        </motion.div>
    );
}
