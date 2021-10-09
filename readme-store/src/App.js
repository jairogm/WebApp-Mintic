<<<<<<< HEAD
import HeaderComponent from './components/HeaderComponent'
import ContentComponent from './components/ContentComponent';
import FooterComponent from './components/FooterComponent';
import EstadoVenta from './components/EstadoVenta';
import { BrowserRouter as Router, Route } from 'react-router-dom';
=======
import Vendedores from "./components/vendedores/Vendedores";
import HeaderComponent from "./components/headerHome/HeaderComponent";
import ContentComponent from "./components/ContentComponent";
import FooterComponent from "./components/footer/FooterComponent";
import GestionUsuarios from "./components/Gestion_Usuarios";
import EstadoVenta from "./components/Estado_Venta";
import AdministrarVenta from "./components/AdministrarVenta";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login-form/login";
import Logout from "./components/login-form/Logout";
>>>>>>> 6feecce58317cf9f2acf6f9aca24588ac64845db

import "./components/css/HeaderComponent.css";
import "./components/css/ContentComponent.css";
import "./components/css/FooterComponent.css";

function App() {
  return (
    <>
<<<<<<< HEAD
      <HeaderComponent />
        <Router>

          <Route exact path="/" component={ContentComponent} />
          <Route path="/EstadoVenta/:id" component={EstadoVenta} />

        </Router>
      <FooterComponent />
=======
      <Router> 
         <Switch>
            <Route exact path="/">
              <HeaderComponent />
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
>>>>>>> 6feecce58317cf9f2acf6f9aca24588ac64845db
    </>
  );
}

export default App;
