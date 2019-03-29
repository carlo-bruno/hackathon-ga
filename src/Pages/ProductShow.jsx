import React from "react";
import pylon1 from '../images/1-Pylon.png';
import pylon2 from '../images/2-Pylon.png';
import pylon3 from '../images/3-Pylon.png';
import pylon4 from '../images/4-Pylon.png';

const ProductShow = (props) => {
  let { name, price, img, rating, description } = props.product;

  let pylons;

  switch (rating) {
    case 1:
      pylons = <img src={pylon1} alt='one pylon' />
      break;
    case 2:
      pylons = <img src={pylon2} alt='one pylon' />
      break;
    case 3:
      pylons = <img src={pylon3} alt='one pylon' />
      break;
    case 4:
      pylons = <img src={pylon4} alt='one pylon' />
      break;
    default:
      pylons = <img src={pylon4} alt='one pylon' />
  }

  return (
    <div className="ProductShow Modal" >

      <div className="outer" onClick={(e) => props.handleCloseModal(e)}></div>


      <section className="inner">
        <div className="image-box">
          <img src={img} alt={name} />
        </div>

        <div className="info-box">
          <h2>{name}</h2>
          <h2>$ {price}</h2>
          <div className="pylon">Rating: {pylons}</div>
          <h4 className="description">{description}</h4>
          <div className="button-group">
            <button className="purchase-btn"
              onClick={(e) => props.handlePurchaseButton(e)}
            >Purchase</button>
            <button className="purchase-btn">
              Add to Cart
          </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ProductShow; 