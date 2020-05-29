import React from "react";
import Info from "../components/AboutPage/info";
import Hero from "../components/hero";
import aboutBcg from "../images/aboutBcg.jpeg";
export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg} />
      <Info />
    </>
  );
}
