import React from 'react';
import Card from '../Components/Card';
import logo from "../images/kitt-logo-2.png" 

const Home = (props) => {
  let cards = props.products.map((product, i) => {
    return <Card key={i} product={product} />;
  });
  return (
    <div className="Home">
    <img className="KittLogo" src={logo} alt="Kit Logo"></img>
      <h2>Home</h2>
        <div className="Feature"> 
        {cards}
        </div>
        <div className="WishList"></div>
        <div className="PurchaseBefore"></div>
    </div>
  )
};

export default Home;
