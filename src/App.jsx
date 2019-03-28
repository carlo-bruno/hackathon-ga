import React, { Component } from 'react';

import Money from './Components/Money';
import Status from './Components/Status';
import ProductShow from './Pages/ProductShow';
// import Purchase from './Pages/Purchase';
import Search from './Pages/Search';

import { Route, Link } from 'react-router-dom';
import Home from './Pages/Home';

import './App.css';

import { productData } from './Data/Products.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productData,
      money: 50000,
      query: '',
      searchResults: []
    };
  }

  handleSearch = (e) => {
    let query = e.target.value.toLowerCase();
    this.setState((state, props) => {
      let searchResults = state.products.filter(product => product.name.toLowerCase().includes(query));
      return { searchResults }
    })
  }

  render() {



    return (
      <div className='App'>
        <header>
          <h1>KITT</h1>
          <input type='text' placeholder='search' onChange={e => this.handleSearch(e)} />
        </header>

        <main className='Content'>
          <Route exact path='/'
            render={() => <Home products={this.state.products} />}
          />

        </main>
      </div>
    );
  }
}

export default App;
