import React from 'react';
import {Link}  from  'react-router-dom';
import  Hero  from "../components/hero";
import defaultBcg from "../images/defaultBcg.jpeg";
export default function Default() { 

    return (
        <>
          <Hero title="404" max="true" img={defaultBcg} max={true}>
            <Link to="/">Return home</Link>
         </Hero>
        </>
    );
}