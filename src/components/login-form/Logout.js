import React from "react";
import GoogleLogout from 'react-google-login';



function Logout() {
    const logOut = (res) => {
        localStorage.clear()
        sessionStorage.clear()
        window.location.replace("/login")
    };

    return (
        <div className="google-logout">
            <button onClick={logOut}>Cerrar sesión</button>
        </div>
    );
}
export default Logout;
