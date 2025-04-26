export function Project({ title, img, desc,ytlink,srccode }) {
    return (
        <div className="skill-item">
            <img src={img} alt={`${title} logo`} className="skill-icon" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <button><a href={srccode} target="_blank" rel="noopener noreferrer"></a>CÓDIGO FONTE</button>
            <button><a href={ytlink} target="_blank" rel="noopener noreferrer"></a>VIDEO DE DEMONSTRAÇÃO</button>
        </div>
    );
}