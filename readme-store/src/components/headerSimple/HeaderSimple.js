import "../css/HeaderSimple.css"
import Logo from '../login-form/img/ReadMeLogo3.png'

const HeaderSimple = () => {
    return (<>
        <nav id='navbar' class="navbar">
            <div className="navbar-logo">
            
                <img src={Logo} alt="Logo" href='!#' />
        
            </div>
        </nav>
    </>)
}



export default HeaderSimple;