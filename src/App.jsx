import React, { Component } from 'react';

import Money from './Components/Money';
// import Status from './Components/Status';
import ProductShow from './Pages/ProductShow';
// import Purchase from './Pages/Purchase';
import Search from './Pages/Search';
import logo from "./images/kitt-logo-2.png"


// import { Route, Link } from 'react-router-dom';
import Home from './Pages/Home';

import './App.css';

import { productData } from './Data/Products.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productData,
      money: 50000,
      searchResults: [],
      current: {},
      modal: 'none'
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    let query = e.target.value.toLowerCase();
    if (query) {
      this.setState((state, props) => {
        let searchResults = state.products.filter(product => product.name.toLowerCase().includes(query));
        return { searchResults }
      })
    } else {
      this.setState({ searchResults: [] })
    }
  }

  handleShowProduct = (product) => {
    this.setState({
      current: product
    })
  }

  handleCloseProduct = () => {
    this.setState({
      current: {},
      modal: 'none'
    })
  }

  render() {
    let content = <Home products={this.state.products} handleShowProduct={this.handleShowProduct} />;

    if (this.state.searchResults.length > 0) {
      content = <Search searchResults={this.state.searchResults} />
    }


    return (
      <div className='App'>
        <header className="Header">
          <img className="kitt-logo" src={logo} alt="Kit Logo"></img>
          <input className="search" type='text' placeholder='search' onChange={e => this.handleSearch(e)} />
          <Money />
        </header>

        <main className='Content'>

          {content}

          {this.state.current &&
            <ProductShow product={this.state.current} />
          }

        </main>
      </div>
    );
  }
}

export default App;
