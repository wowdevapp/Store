import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import Services from "../components/homePage/services";
import Featured from "../components/homePage/featured";
export default function home() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products">Our Products</Link>
      </Hero>
      <Services></Services>
      <Featured></Featured>
    </>
  );
}
