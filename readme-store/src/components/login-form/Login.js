import React from "react";
import GoogleLogin from 'react-google-login';




const clientId= "274458045197-0e7v4i3qujmmv24q3dirtkvhvab2usa0.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log('[Inicio de sesión exitoso!] currentUser:', res.profileObj);
    };

const onFailure = (res) => {
    console.log('[Inicio de sesión fallido] ress:', res);
    };

return (
    <div>
        <GoogleLogin
        clientId="274458045197-0e7v4i3qujmmv24q3dirtkvhvab2usa0.apps.googleusercontent.com"
        buttonText="Inicio de Sesión"
        //onSuccess={responseGoogle}
        //onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px'}}
        isSignedIn={true}
        />,
    </div>
    );
}
export default Login;
