export function Skill({ title, image }) {
    return (
        <div className="skill-item">
            <img src={image} alt={`${title} logo`} className="skill-icon" />
            <h2>{title}</h2>
        </div>
    );
}
