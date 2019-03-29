import React, { Component } from "react";


class ProductShow extends Component {
   constructor(props) {
      super(props)

      this.state = {
         visible: false
      }
   }


   render() {
      let { name, price, img } = this.props.product;

      return (
         <div className="ProductShow hidden">

            <div className="inner">
               <div className="image-box">
                  <img src={img} alt={name} />
               </div>

               <div className="info-box">
                  <h3>{name}</h3>
                  <h3>{price}</h3>
               </div>
               <button>Purchase</button>
            </div>

         </div>
      )
   }
}

export default ProductShow; 