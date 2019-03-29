import React from "react"

const Purchase = (props) => {

   return (
      <div className="Purchase Modal">
         <div className="outer" onClick={(e) => props.handleCloseModal(e)}></div>
         <div className="inner">
            <h2> {props.product.price} will be deducted from your account</h2>
            <h4>Do you wish to continue?</h4>
            <button>CONFIRM</button>
         </div>
      </div>
   )
}

export default Purchase

