import React from 'react';
import etherium from '../images/etherium.png'
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
      <div>
        <h2>Featured</h2>
        <Carousel products={feature} handleShowProduct={props.handleShowProduct} />
      </div>

      <h2>Wishlist</h2>
      <Carousel products={wishlist} handleShowProduct={props.handleShowProduct} />

      <h2>Purchased Before</h2>
      <Carousel products={purchased} handleShowProduct={props.handleShowProduct} />


    </div>
  )
};

export default Home;
