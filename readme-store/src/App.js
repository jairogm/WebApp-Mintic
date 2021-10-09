import HeaderComponent from "./components/HeaderComponent";
import ContentComponent from "./components/ContentComponent";
import FooterComponent from "./components/FooterComponent";
import GestionUsuarios from "./components/Gestion_Usuarios";
import EstadoVenta from "./components/Estado_Venta";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <Route path="/gestionusuarios">
              <GestionUsuarios />
            </Route>
            <Route path="/estadoventa">
              <EstadoVenta/>
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
