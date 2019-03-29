import React from 'react';
import etherium from '../images/etherium.png'

const Money = (props) => {
   let money = props.money.toLocaleString();
   return (
      <div className="Money">
         <img src={etherium} alt="etherium" />
         <h3>{money}</h3>
      </div>
   )
}


export default Money; 