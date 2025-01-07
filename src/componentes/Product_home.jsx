const Product_home = () =>{
    return(
        <div>
            <h2>Productos para toda la casa </h2>
            <p>Descubre nuestra amplia gama de productos para tu hogar</p>
            <div class="products-container">
                <div class="product-card">
                    <img src="/imagenes/ultravioleta.png" alt="Imagen del filtro de llave"/>
                    <h3>Unidad de desinfeccion ultravioleta </h3>
                    <a href="#" class="btn">Ver más →</a>
                </div>
                <div class="product-card">
                    <img src="/imagenes/Carbon.jpg" alt="Imagen de la jarra filtradora"/>
                    <h3>filtro de cedimentos o carbon activado</h3>
                    <a href="#" class="btn">Ver más →</a>
                </div>
                <div class="product-card">
                    <img src="/imagenes/calentador de agua.png" alt="Imagen del filtro de icemaker"/>
                    <h3>Calentador solar de agua</h3>
                    <a href="#" class="btn">Ver más →</a>
                </div>
            </div>

        </div>
    );
};
export default Product_home;