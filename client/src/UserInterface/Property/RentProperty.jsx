import React from "react";
import Header from "../header/Header";
import BuyPropertyContent from "./BuyPropertyContent";
import HomeProperty from "../Homepage/HomeProperty"
import HomeFooter from "../Homepage/HomeFooter";

function RentProperty() {
  return (
    <>
      <Header />
      <BuyPropertyContent/>
      <HomeProperty/>
      <HomeFooter />
    </>
  );
}
export default RentProperty;
