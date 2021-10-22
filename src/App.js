import Vendedores from "./components/modulovendedores/Vendedores";
import HeaderComponent from "./components/headerHome/HeaderComponent";
import ContentComponent from "./components/ContentComponent";
import FooterComponent from "./components/footer/FooterComponent";
import GestionUsuarios from "./components/Gestion_Usuarios";
import EstadoVenta from "./components/estadoventa/EstadoVenta";
import AdministrarVenta from "./components/AdministrarVenta";
import ModuloAdmin from "./components/moduloadmin/ModuloAdmin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login-form/Login";
import Logout from "./components/login-form/Logout";

import "./components/css/HeaderComponent.css";
import "./components/css/ContentComponent.css";
import "./components/css/FooterComponent.css";

function App() {
  return (
    <>
      <Router> 
         <Switch>
            <Route exact path="/">
              <HeaderComponent />
              <ContentComponent />
              <FooterComponent />
            </Route>
            <Route path="/login">
              <Login/>
              
            </Route>
            <Route path="/vendedores">
                <Vendedores/>
                <Logout/>
            </Route>
            <Route path="/moduloadmin">
                <ModuloAdmin/>
                <Logout/>
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
