import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import cart from "./pages/cart";
import {
  Switch,
  Route,
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart,footer*/}
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
          <Route path="/cart" component={cart} />
        </Switch>
      </>
    );
  }
}

export default App;

