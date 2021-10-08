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
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gestionusuarios">Gestion Usuarios</Link>
            </li>
            <li>
              <Link to="/dashboard">Estado Venta</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
        </div>
      </Router>
    </>
  );
}

export default App;
