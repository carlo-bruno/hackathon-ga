import React from 'react';
import Card from '../Components/Card';

const Home = (props) => {
  let feature = props.products.filter((product) => {
    return product.feature
  }).map((product, i) => {
    return <Card key={i} product={product} handleShowProduct={() => { props.handleShowProduct(product) }} />
  })

  let wishlist = props.products.filter((product) => {
    return product.wishList
  }).map((product, i) => {
    return <Card key={i} product={product} handleShowProduct={() => { props.handleShowProduct(product) }} />
  })

  let purchased = props.products.filter((product) => {
    return product.purchaseBefore
  }).map((product, i) => {
    return <Card key={i} product={product} handleShowProduct={() => { props.handleShowProduct(product) }} />
  })


  return (
    <div className="Home">

      <h3>Featured</h3>
      <div className="feature-collection">
        {feature}
      </div>
      <h3>Wishlist</h3>
      <div className="wishList-collection">
        {wishlist}
      </div>
      <h3>Purchased Before</h3>
      <div className="purchaseBefore-collection">
        {purchased}
      </div>

    </div>
  )
};

export default Home;
