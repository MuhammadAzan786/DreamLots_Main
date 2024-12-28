import React from "react";
import Header from "../header/Header";
import HomeFooter from "../Homepage/HomeFooter";
import PropertViewDetail from "./PropertyViewDetail";


function PropertyDetail(){
  return(
    <>
    <Header/>
    <PropertViewDetail/>
    <HomeFooter/>
    </>
  );
}

export default PropertyDetail;