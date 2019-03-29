import React from "react";

const ProductShow = (props) => {
  let { name, price, img } = props.product;

  return (
    <div className="ProductShow" >

      <div className="outer" onClick={(e) => props.handleCloseProduct(e)}></div>

      <section className="inner">
        <div className="image-box">
          <img src={img} alt={name} />
        </div>

        <div className="info-box">
          <h2>{name}</h2>
          <h2>$ {price}</h2>
          <p>Rating: ****</p>
          <button className="purchase-btn">Purchase</button>
        </div>
      </section>

    </div>
  )
}

export default ProductShow; 