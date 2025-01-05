import somos from '../imagenes/analisis-de-calidad-del-agua-guia-completa-para-asegurar-un-recurso-vital.jpg'
const Quienes_somos = () => {
    return(
    <div className='quienes_somos'>
     <h2>Quiénes Somos</h2>
        <div class="content-container">
            <img src={somos} alt='QuisiPro' className='image'/>
            <div class="text-ini">
            <p>Somos un grupo de estudiantes de la Escuela Politecnica Nacional comprometidos con el cuidado del medio ambiente y la mejora de la calidad de vida de las personas. Nuestro enfoque principal es trabajar en soluciones sostenibles para mejorar la calidad del agua, ya que entendemos la importancia de este recurso vital para el bienestar de las comunidades y la preservación de los ecosistemas.</p>
            <p>A través de la investigación, la innovación y la educación, buscamos reducir los niveles de contaminación en las fuentes de agua y concientizar sobre la importancia de un uso responsable de los recursos hídricos. Nos motiva contribuir a un futuro en el que todos tengamos acceso a agua limpia y segura, y estamos convencidos de que, con esfuerzo y dedicación, podemos lograr un impacto positivo y duradero en nuestro entorno.</p>
        </div>
        </div>   

    </div>
    );
};

export default Quienes_somos;