import conta from '../imagenes/Contaminacion.png'
import probl from '../imagenes/problemas de salud.jpg'
const Impacto = () => {
    return(
        <div className="impacto">
         <h2>Impacto</h2>
        <p>La contaminación del agua genera impacto profundos en la salud, el medio ambiente. Sus consecuencias afectan directamente la calidad de vida de las personas y ponen en riesgo los ecosistemas.</p>
        <div class="content-impact">
            <h3>Salud y calidad de vida</h3>
            <div class="subsection">
                <p>En Ecuador, la contaminación del agua afecta a miles de personas, especialmente en zonas rurales y comunidades indígenas. El uso de agua contaminada para consumo y aseo está vinculado a enfermedades como infecciones gastrointestinales, diarreas y parasitosis, afectando gravemente a poblaciones con acceso limitado a servicios de salud.</p>
                <img src={conta} class="image"/>
            </div>
            <h3>Ecosistemas</h3>
            <div class="subsection">
                <img src={probl} class="image"/>
                <p>La creciente contaminación reduce la disponibilidad de agua potable en Ecuador, un país que, aunque es rico en recursos hídricos, enfrenta una presión creciente debido a la contaminación y la deforestación. Esto afecta la capacidad de los ecosistemas para regular el clima y proveer agua limpia, generando un impacto ambiental a largo plazo.</p>
                
            </div>
        </div>   
        </div>
    );
};
export default Impacto;