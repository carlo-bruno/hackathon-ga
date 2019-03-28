import React, { Component } from 'react';
import './App.css';

import { productData } from './Data/Products.js';
import Card from './Components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productData,
      money: 50000
    };
  }

  render() {
    let cards = this.state.products.map((product, i) => {
      return <Card key={i} product={product} />;
    });

    return (
      <div className='App'>
        <header>
          <h1>KITT</h1>
          <input type='text' placeholder='search' />
        </header>

        <main className='Content'>{cards}</main>
      </div>
    );
  }
}

export default App;
