import React from "react";
import KittDude from "../Components/KittDude";

const LoadingPage = (props) => {

   return (
      <div className="LoadingPage">
         <div className="load-images">
            <div className="loaderBox">
            </div>
            <KittDude />
         </div>
         <div className="loadPageHeader">
            <h1> Loading Profile... </h1>
         </div>
      </div>
   )
}

export default LoadingPage; 
