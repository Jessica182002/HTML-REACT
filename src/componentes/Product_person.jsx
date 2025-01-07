const Product_person =() => {
    return(
        <div>
            <h2>Productos para el hogar </h2>
            <p>¡Mejora la calidad del agua en tu hogar con nuestras soluciones de filtración!</p>
            <div class="products-container">
                <div class="product-card">
                    <img src="/imagenes/filtro de llave.jpg" alt="Imagen del filtro de llave"/>
                    <h3>Filtro de llave</h3>
                    <a href="#" class="btn">Ver más →</a>
                </div>
                <div class="product-card">
                    <img src="/imagenes/filtro jarra.jpg" alt="Imagen de la jarra filtradora"/>
                    <h3>Jarra Filtradora</h3>
                    <a href="#" class="btn">Ver más →</a>
                </div>
                <div class="product-card">
                    <img src="/imagenes/Filtro-Ice-Maker-2.jpg" alt="Imagen del filtro de icemaker"/>
                    <h3>Filtro de icemaker</h3>
                    <a href="#" class="btn">Ver más →</a>
                </div>
            </div>

        </div>
    );
};
export default Product_person;