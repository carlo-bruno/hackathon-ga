import React from 'react';
import Card from '../Components/Card';
import logo from "../images/kitt-logo-2.png" 

const Home = (props) => {
  let cards = props.products.map((product, i) => {
    return <Card key={i} product={product} handleShowProduct={() => { props.handleShowProduct(product) }} />;
  });
  return (
    <div className="Home">
    <a href= "/">
      <img className="KittLogo" src={logo} alt="Kit Logo"></img>
    </a>
      <h2>Home</h2>
        <div className="Feature"> 
          {cards}
        </div>
        <div className="WishList"> 
        {/* stuff */}
        </div>
        <div className="PurchaseBefore">
        {/* stuff */}
        </div>
    </div>
  )
};

export default Home;
