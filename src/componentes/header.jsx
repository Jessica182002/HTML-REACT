import logo from '../imagenes/QuisiPro.jpeg';
const Header = () => {
    return(
    <nav class="navbar">
            <div>
                <img src={logo} className='logo'/>
            </div>
            <ul>
                <li><a href="/index.html">Inicio</a></li>
                <li><a href="productos.html">Productos</a></li>
            </ul>
        </nav>
    );
};

export default Header;