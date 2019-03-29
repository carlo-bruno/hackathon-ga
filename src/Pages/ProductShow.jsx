import React from "react";


const ProductShow = (props) => {
   let { name, price, img } = props.product;

   return (
      <div className="ProductShow">

         <div className="image-box">
            <img src={img} alt={name} />
         </div>
         <div className="info-box">
            <h3>{name}</h3>
            <h3>{price}</h3>
         </div>
      </div>
   )
}


export default ProductShow; 