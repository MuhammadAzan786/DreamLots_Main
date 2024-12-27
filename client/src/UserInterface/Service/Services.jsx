import React from "react";
import Header from "../header/Header";
import HomeFooter from "../Homepage/HomeFooter";
import ServiceHero from "./ServiceHero";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <>
      <Header />
      <ServiceHero />
      <ServiceCard />
      <HomeFooter />
    </>
  );
}
export default Services;
