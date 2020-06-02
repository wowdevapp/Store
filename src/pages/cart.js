import React from "react";
import CartPage from "../components/cartPage/cartPage";
import Hero from "../components/hero";
import cartBcg from "../images/storeBcg.jpeg";
export default function Cart() {
  return (
    <>
      <Hero img={cartBcg} />
      <CartPage></CartPage>
    </>
  );
}
