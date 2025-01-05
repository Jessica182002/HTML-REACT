const Comentarios =() =>{
    return(
        <div>
        <h2>Comentarios</h2>
        <p>Nos gustaría conocer tus pensamientos sobre la problemática del agua y nuestras iniciativas.</p>
        <form class="comments-form">
            <label for="nombre-comentario">Nombre:</label>
            <input type="text" id="nombre-comentario" name="nombre-comentario" required/>
            <label for="comentario">Comentario:</label>
            <textarea id="comentario" name="comentario" rows="4" required></textarea>

            <button type="submit">Enviar Comentario</button>
        </form>
        </div>
    );
};
export default Comentarios;