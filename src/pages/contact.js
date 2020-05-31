import React from 'react';
import Hero from "../components/hero";
import ContactForm from "../components/contactPage/contactForm"
import contactBcg from "../images/contactBcg.jpeg";

export default function contact() {
    return (
        <>
          <Hero img={contactBcg}></Hero>  
          <ContactForm></ContactForm>
        </>
    )
}


