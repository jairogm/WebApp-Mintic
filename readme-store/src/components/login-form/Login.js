import React from "react";
import GoogleLogin from 'react-google-login';
import LogoM from '../login-form/img/ReadMeLogo.png'
import axios from 'axios';
import './css/stylelogin.css'


function Login() {
    const onSuccess = (googleUser) => {
        const profile = googleUser.getBasicProfile();
        const name = profile.getName()
        const email = profile.getEmail()
        var jwt = require('jsonwebtoken')
        const headers = {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
        var data = JSON.stringify({
            "name": name,
            "email": email,
            "username": email,
            "withGoogle": true,
            "status": "enabled"
        });
        axios.post('https://readme-store-api.herokuapp.com/api/users/auth', data = data, { headers: headers }).then((response) => {
            let tokeninfo = jwt.decode(response.data.token, process.env.JWT_SECRET)
            console.log(tokeninfo);
        })
    };

    const onFailure = (res) => {
        console.log('[Inicio de sesión fallido] ress:', res);
    };

    return (
        <div className="body">
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
