import React from "react";
import Header from "../header/Header";
import BuyPropertyContent from "./BuyPropertyContent";
import HomeProperty from "../Homepage/HomeProperty"
import HomeFooter from "../Homepage/HomeFooter";

function BuyProperty() {
  return (
    <>
      <Header />
      <BuyPropertyContent/>
      <HomeProperty/>
      <HomeFooter />
    </>
  );
}
export default BuyProperty;
