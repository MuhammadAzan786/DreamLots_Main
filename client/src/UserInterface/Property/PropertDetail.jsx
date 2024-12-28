import "react";
import Header from "../header/Header";
import HomeFooter from "../Homepage/HomeFooter";
import PropertViewDetail from "./PropertyViewDetail";
import HomeProperty from "../Homepage/HomeProperty";


function PropertyDetail(){
  return(
    <>
    <Header/>
    <PropertViewDetail/> 
    <HomeProperty/>
    <HomeFooter/>
    </>
  );
}

export default PropertyDetail;