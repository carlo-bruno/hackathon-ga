import React from 'react';
import Carousel from '../Components/Carousel';
// import HelloEllon from "../Components/HelloEllon"

const Home = (props) => {
  let feature = props.products.filter((product) => {
    return product.feature
  })

  let wishlist = props.products.filter((product) => {
    return product.wishList
  })

  let purchased = props.products.filter((product) => {
    return product.purchaseBefore
  })


  return (
    <div className="Home">
      <h4> Welcome Elon M </h4>
      <div>
        <h2>Featured</h2>
        <Carousel products={feature} handleShowProduct={props.handleShowProduct} />
      </div>

      <h3>Wishlist</h3>
      <Carousel products={wishlist} handleShowProduct={props.handleShowProduct} />

      <h3>Purchased Before</h3>
      <Carousel products={purchased} handleShowProduct={props.handleShowProduct} />


    </div>
  )
};

export default Home;
