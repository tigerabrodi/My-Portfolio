import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import 'bulma/css/bulma.css';
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";

import './App.css';

const App = () => {
  return (
    <div className="App">
    <Navbar /> 
    <div className="container">
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    </Switch>
    </div>
    <Footer />
    </div>
  );
}

export default App;
