import Vendedores from "./components/vendedores/Vendedores";
import HeaderComponent from "./components/headerHome/HeaderComponent";
import ContentComponent from "./components/ContentComponent";
import FooterComponent from "./components/footer/FooterComponent";
import GestionUsuarios from "./components/Gestion_Usuarios";
import EstadoVenta from "./components/Estado_Venta";
import AdministrarVenta from "./components/AdministrarVenta";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login-form/login";
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
              <HeaderComponent />git
              <ContentComponent />
              <FooterComponent />
            </Route>
            <Route path="/login">
              <Login/>
              <Logout/>
            </Route>
            <Route path="/gestionusuarios">
              <GestionUsuarios />
            </Route>
            <Route path="/estadoventa">
              <EstadoVenta/>
            </Route>
            <Route path="/administrarventa">
                <AdministrarVenta/>
            </Route>
            <Route path="/vendedores">
                <Vendedores/>
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
