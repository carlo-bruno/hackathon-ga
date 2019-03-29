import React from 'react';
import etherium from '../images/etherium.png'


const Money = (props) => {
   let money = props.money.toLocaleString();
   return (
      <div className="Money">

         <h4>Balance: </h4>
         <h3><img src={etherium} alt="etherium" />{money}</h3>
      </div>
   )
}


export default Money; 