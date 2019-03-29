import React from 'react';
import Card from '../Components/Card';

const Home = (props) => {
  let cards = props.products.map((product, i) => {
    return <Card key={i} product={product} handleShowProduct={() => { props.handleShowProduct(product) }} />;
  });
  return (
    <div className="Home">
      <h2>Home</h2>
      {cards}
    </div>
  )
};

export default Home;
