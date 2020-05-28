import React from 'react'
import { ProductConsumer } from "../context/context";


export default function home() {
    return (
        <>
        <ProductConsumer>
          {value => {
            console.log(value);
            return <h1>Hello from HomePage</h1>;
          }}
        </ProductConsumer>
      </>
    )
}


