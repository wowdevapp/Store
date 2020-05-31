import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductImg} title="single product" />
    </>
  );
}
