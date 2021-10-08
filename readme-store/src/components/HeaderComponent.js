
const HeaderComponent = () => {
    return (<nav id='navbar' className="navbar">
        <div className="navbar-logo">
            <a id='navbar-menu' href='#' className='icon'>
                README STORE
            </a>
        </div>
        <div className='navbar-links'>
            <a href='#'>Inicio</a>
            <a href='#'>Quienes Somos</a>
            <a href='#'>Catalogo</a>
            <a href='#'>Nuestras Tiendas</a>
        </div>
        <div className="navbar-buttons">
            <div className="nav-input">
                <input type="text" name="nav-search" id="nav-search"/>
            </div>
            <div className="nav-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="cus-svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
            </div>
            <div className="nav-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="cus-svg" fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </div>
        </div>
    </nav>)
}



export default HeaderComponent;