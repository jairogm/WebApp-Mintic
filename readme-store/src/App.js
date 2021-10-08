import HeaderComponent from './components/HeaderComponent'
import ContentComponent from './components/ContentComponent';
import FooterComponent from './components/FooterComponent';
import EstadoVenta from './components/EstadoVenta';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './components/css/HeaderComponent.css'
import './components/css/ContentComponent.css'
import './components/css/FooterComponent.css'

function App() {
  return (
    <>
      <HeaderComponent />
        <Router>

          <Route exact path="/" component={ContentComponent} />
          <Route path="/EstadoVenta/:id" component={EstadoVenta} />

        </Router>
      <FooterComponent />
    </>
  );
}

export default App;
