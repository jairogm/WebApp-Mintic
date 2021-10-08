import React from "react";
import './App.css';
//import { BrowserRouter as Router, Route } from 'react-router-dom'



import HeaderComponent from './components/HeaderComponent'
import ContentComponent from './components/ContentComponent';
import FooterComponent from './components/FooterComponent';
import login from './components/login'


import './components/css/HeaderComponent.css'
import './components/css/ContentComponent.css'
import './components/css/FooterComponent.css'

function App() {
  return (
    <>
    <HeaderComponent />
    <ContentComponent />
    <FooterComponent />
    </>
    //<Router>
      //<HeaderComponent />
      //<div className="container p-4">
     // <Route path="/login" exact component={login} />
      //</div>
      //<ContentComponent />
     // <FooterComponent />
      

    //</Router>

  );
}

export default App;
