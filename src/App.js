import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sobre from "./components/pages/Sobre";
import Contato from "./components/pages/Contato";
import Cadastro from "./components/pages/Cadastro";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/contato" component={Contato} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
