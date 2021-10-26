import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import LogoM from "../login-form/img/ReadMeLogo.png";
import axios from "axios";
import "./css/stylelogin.css";
import { Redirect } from "react-router";

function Login() {
  const [isAdmin, setAdmin] = useState(false);
  const [isLogedIn, setUsLog] = useState(false);

  const getToken = () => {
    let userrol = localStorage.getItem('rol');
    if (userrol == "Admin") {
      setAdmin(true)
      setUsLog(true)
    } else if (userrol == "Seller") {
      setAdmin(false)
      setUsLog(true)
    } else {
      setUsLog(false)
      setAdmin(false)
    }
    return window ? userrol : '';
  };


  const onSuccess = async (googleUser) => {
    const profile = googleUser.getBasicProfile();
    const name = profile.getName();
    const email = profile.getEmail();
    var jwt = require("jsonwebtoken");
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    var data = JSON.stringify({ name: name, email: email, username: email, withGoogle: true, status: "enabled", });
    if (!getToken()) {
      let respons = await axios.post("https://readme-store-api.herokuapp.com/api/users/auth", (data = data), { headers: headers })
      console.log(respons.data)
      let tokeninfo = jwt.decode(respons.data.token, process.env.REACT_APP_JWT_SECRET);
      if (tokeninfo.rol == 'Pending') {
        alert(`Aún no cuentas con un Rol en el sistema
Contacta con uno de los Administradores
- lauracamila2417@gmail.com
- betancourtlopez02@gmail.com
- juanrespolo@gmail.com
- jairogarces1@gmail.com
- crihstianmol@gmail.com`)
        window.location.replace('/')
      }else{
        localStorage.setItem('rol', tokeninfo.rol)
        localStorage.setItem('userid', tokeninfo.id)
      }
      getToken()
    }
  }

  //si google falla
  const onFailure = (res) => {

  };

  return (
    <div className="body">
      {isLogedIn ? (
        <>
          {isAdmin === true ? (
            <>
              <Redirect to="/moduloadmin" />
            </>
          ) : (
            <>
              <Redirect to="/vendedores" />
            </>
          )}
        </>
      ) : (
        <>
          <div className="login-box">
            <img src={LogoM} alt="Logo" href="!#" />
            <h1> Bienvenido!</h1>
            <p>Para iniciar Sesión ingrese con su cuenta Google</p>
          </div>

          <div className="google-login">
            <GoogleLogin
              clientId="274458045197-0e7v4i3qujmmv24q3dirtkvhvab2usa0.apps.googleusercontent.com"
              buttonText="Inicio de Sesión"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              style={{ marginTop: "100px" }}
            />
          </div>

          <div className="footer-container">
            <a href="!#">Politica de Privacidad</a> |
            <a href="!#">Terminos & condiciones</a> | &copy Copyright 2021-
            ReadMe Libreria - Todos los derechos revervados.
          </div>
        </>
      )}
    </div>
  )
}
export default Login;
