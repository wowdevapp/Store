import React from 'react';
import {Link}  from  'react-router-dom';
import  Hero  from "../components/hero";
export default function home(){
    return (
        <>
          <Hero title="awesome gadgets" max="true">
            <Link to="/products">Our Products</Link>
         </Hero>
        </>
    );
}


