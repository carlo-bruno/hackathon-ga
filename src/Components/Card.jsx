import React from 'react';

const Card = (props) => {
  return (
    <div className='Card'>
      <h3>{props.product.name}</h3>
      <h3>{props.product.price}</h3>
      <img
        src='http://via.placeholder.com/200x200'
        alt={props.product.name}
      />
    </div>
  );
};

export default Card;
