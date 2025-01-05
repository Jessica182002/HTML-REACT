import solu from '../imagenes/ba477c38bb9e5207e262e20af2b324e9.gif'
const Soluciones = () => {
    return(
        <div className="Solucion">
             <h2>Soluciones</h2>
    <p>Como QuisiPro desarrollamos una serie de soluciones basadas en un análisis profundo y dirigidos a mitigar el impacto de la contaminación del agua mejorando así la calidad de vida de las comunidades y ecosistemas afectados.</p>
    <div class="content-container">
        <img src={solu} class="image"/>                
                <div class="solution-text">
                <h3>Control y regulación</h3>
                <p>Fortalecer las leyes ambientales para prevenir el vertido de contaminantes en fuentes de agua, protegiendo así la salud de las personas y el medio ambiente.</p>
                
                <h3>Tecnologías de saneamiento</h3>
                <p>Implementar sistemas de tratamiento de aguas residuales en áreas industriales y rurales, utilizando tecnologías sostenibles y accesibles.</p>
                
                <h3>Educación y concientización</h3>
                <p>Fomentar una cultura de uso responsable del agua a través de programas educativos y campañas de sensibilización.</p>   
            </div>
        </div>  
        </div>
    );
};
export default Soluciones;