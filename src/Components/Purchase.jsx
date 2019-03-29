import React from "react"
import etherium from '../images/etherium.png'

const Purchase = (props) => {

   return (
      <div className="Purchase Modal">
         <div className="outer" onClick={(e) => props.handleCloseModal(e)}></div>

         <div className="inner">
            <h2> <img src={etherium} alt="etherium" /> {props.product.price} will be deducted from your account</h2>
            <h3>Do you wish to continue?</h3>
            <button className="confirm-button"
               onClick={(e) => props.handlePurchaseConfirm(e)}
            >CONFIRM</button>
         </div>

      </div>
   )
}

export default Purchase

