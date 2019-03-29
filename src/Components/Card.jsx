import React from 'react';

const Card = (props) => {
  return (
    <div className='Card'>
      <div className="imageBox">
      <img className="CardContent"
        src='http://via.placeholder.com/200x200'
        alt={props.product.name}
      />
      </div>
    <div className="NamePrice">
      <h3 className="CardName">{props.product.name}</h3>
      <h3 className="CardPrice">{props.product.price}</h3>
      </div>
    </div>
  );
};

export default Card;
