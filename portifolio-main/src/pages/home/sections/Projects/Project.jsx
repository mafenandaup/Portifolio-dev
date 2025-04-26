export function Project({ title, img, desc,ytlink,srccode }) {
    return (
        <div className="project-item">
            <img src={img} alt={`${title}`} className="project-img" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href={srccode} target="_blank" rel="noopener noreferrer"><button>CÓDIGO FONTE</button></a>
            <a href={ytlink} target="_blank" rel="noopener noreferrer"><button>VIDEO DE DEMONSTRAÇÃO</button></a>
        </div>
    );
}