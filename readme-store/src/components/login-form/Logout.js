import React from "react";
import GoogleLogout from 'react-google-login';


function Logout() {
    const onSuccess = (res) => {
        alert('Cierre de sesión exitoso');
        };

return (
    <div>
        <GoogleLogout
        clientId="274458045197-0e7v4i3qujmmv24q3dirtkvhvab2usa0.apps.googleusercontent.com"
        buttonText="Cerrar Sesión"
        onLogoutSuccess={onSuccess}
        ></GoogleLogout>
    </div>
);
}
export default Logout;
