import React from 'react';
import Card from '../Components/Card';

const Home = (props) => {
  let cards = props.products.map((product, i) => {
    return <Card key={i} product={product} handleShowProduct={() => { props.handleShowProduct(product) }} />;
  });

  return (
    <div className="Home">

      <h3>Featured</h3>
      <div className="feature-collection">
        {cards}
      </div>

      <h3>Wishlist</h3>
      <div className="wishList-collection">
        {cards}
      </div>

      <h3>Purchased Before</h3>
      <div className="purchaseBefore-collection">
        {cards}
      </div>

    </div>
  )
};

export default Home;
