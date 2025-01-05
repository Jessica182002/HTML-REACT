import problema from '../imagenes/problema.jpg'
const Problema =() => {
    return(
        <div className="Problem">
         <h2>Problemática</h2>
        <div class="content-container">
            <img src={problema} alt="Problema de Contaminación" class="image"/>
            <div class="text-prob">
            <p>La contaminación del agua es una crisis ambiental que afecta tanto la salud humana como el equilibrio de los ecosistemas. La falta de un manejo adecuado de residuos industriales, agrícolas y domésticos contamina fuentes de agua, volviéndolas inseguras para el consumo humano y dañinas para la biodiversidad.</p>
            <p>Esta situación reduce la calidad de vida de millones de personas, especialmente en comunidades vulnerables, generando enfermedades y limitando el acceso a agua potable. Además, el deterioro de los ecosistemas acuáticos agrava la crisis, poniendo en riesgo la sostenibilidad de los recursos naturales.</p>
            <p>Para enfrentar esta problemática, es fundamental implementar tecnologías de tratamiento, fortalecer las leyes de protección ambiental y promover una mayor conciencia sobre la importancia de preservar el agua.</p>
        </div>
        </div>   
        </div>
    );
};
export default Problema;