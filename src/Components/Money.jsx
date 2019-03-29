import React from 'react';

const Money = (props) => {
   let money = props.money.toLocaleString();
   return (
      <div className="Money">
         <h3>{money}</h3>
      </div>
   )
}


export default Money; 