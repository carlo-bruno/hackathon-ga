import React from 'react';
import Card from '../Components/Card';

const Home = (props) => {
  let cards = props.products.map((product, i) => {
    return <Card key={i} product={product} />;
  });
  return <div>{cards}</div>;
};

export default Home;
