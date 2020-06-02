import React from "react";
import Title from "../title";
import CartColumns from "./cartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default function CartPage() {
  return (
    <section className="py-5">
      <div className="container">
        {/* cart title */}
        <Title title="your cart  items" center></Title>
      </div>
      {/* cart columns */}
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
}
