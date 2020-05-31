import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import cart from "./pages/cart";
import ProductsPage from "./pages/productPage";
import Default from "./pages/default";
import SingleProduct from "./pages/SingleProductPage";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/SideCart";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart,footer*/}
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Sidecart></Sidecart>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={cart} />
          <Route component={Default} />
        </Switch>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
