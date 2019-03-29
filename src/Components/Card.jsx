import React from 'react';

const Card = (props) => {
  return (
    <div className='Card' onClick={() => props.handleShowProduct()}>
      <div className="card-img">
        <img
          src={props.product.img}
          alt={props.product.name}
        />
      </div>
      <div className="card-info">
        <h3 className="name">{props.product.name}</h3>
        <h3 className="price">{props.product.price}</h3>
      </div>
    </div>
  );
};

export default Card;
