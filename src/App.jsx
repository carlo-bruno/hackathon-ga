import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Pages/Home';

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
    return (
      <div className='App'>
        <header>
          <h1>KITT</h1>
          <input type='text' placeholder='search' />
        </header>

        <main className='Content'>
          <Route
            exact
            path='/'
            render={() => <Home products={this.state.products} />}
          />
        </main>
      </div>
    );
  }
}

export default App;