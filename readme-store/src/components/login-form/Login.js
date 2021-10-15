import React from "react";
import GoogleLogin from 'react-google-login';
import LogoM from '../login-form/img/ReadMeLogo.png'
import './css/stylelogin.css'


function Login() {
    const onSuccess = (googleUser) => {
        const profile = googleUser.getBasicProfile();
        const name = profile.getName()
        const email = profile.getEmail()
        var axios = require('axios');
        var data = JSON.stringify({
            "name": name,
            "email": email,
            "withGoogle": true,
            "status": "enabled"
        });

        var config = {
            method: 'post',
            url: 'https://readme-store-api.herokuapp.com/api/users/auth',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const onFailure = (res) => {
        console.log('[Inicio de sesión fallido] ress:', res);
    };

    return (
        <div>
            <div className="login-box">
                <img src={LogoM} alt="Logo" href='!#' />
                <h1> Bienvenido!</h1>
                <p>Para iniciar Sesión ingrese con su cuenta Google</p>
            </div>

            <div className="google-login">
                <GoogleLogin
                    clientId="274458045197-0e7v4i3qujmmv24q3dirtkvhvab2usa0.apps.googleusercontent.com"
                    buttonText="Inicio de Sesión"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px' }}
                    isSignedIn={true}
                />
            </div>

            <div className="footer-container">
                <a href="#">Politica de Privacidad</a> |
                <a href="#">Terminos & condiciones</a> | &copy Copyright 2021- ReadMe Libreria - Todos los derechos revervados.
            </div>
        </div>
    );
}
export default Login;
