import Vendedores from "./components/modulovendedores/Vendedores";
import HeaderComponent from "./components/headerHome/HeaderComponent";
import ContentComponent from "./components/ContentComponent";
import FooterComponent from "./components/footer/FooterComponent";
import GestionUsuarios from "./components/Gestion_Usuarios";
import EstadoVenta from "./components/estadoventa/EstadoVenta";
import Inventario from "./components/gestion-inventario/Inventario";
import AdministrarVenta from "./components/AdministrarVenta";
import GestionVendedores from "./components/gestion-vendedores/gestion-vendedores";
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
          </Route>
          <Route path="/login">
            <Login />
            <Logout />
          </Route>
          <Route path="/gestionusuarios">
            <GestionUsuarios />
          </Route>
          <Route path="/estadoventa">
            <EstadoVenta />
          </Route>
          <Route path="/gestion-vendedores">
            <GestionVendedores />
          </Route>
          <Route path="/inventario">
            <Inventario />
          </Route>
          <Route path="/administrarventa">
            <AdministrarVenta />
          </Route>
          <Route path="/vendedores">
            <Vendedores />
          </Route>
        </Switch>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
