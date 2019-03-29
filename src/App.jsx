import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';

import Money from './Components/Money';
// import Status from './Components/Status';
import KittDude from './Components/KittDude';

import Home from './Pages/Home';
import Search from './Pages/Search';
import ProductShow from './Pages/ProductShow';
// import Purchase from './Pages/Purchase';


import logo from "./images/kitt-logo-2.png"
import './App.css';

import { productData } from './Data/Products.js';
import Purchase from './Components/Purchase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productData,
      money: 5000000,
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
      current: product,
      modal: 'showProduct'
    })
  }

  handleCloseModal = (e) => {
    e.stopPropagation()
    this.setState({
      current: {},
      modal: 'none'
    })
  }

  handlePurchaseButton = (e) => {
    e.stopPropagation();
    this.setState({
      modal: 'purchase'
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
          <Money money={this.state.money} />
        </header>

        <main className='Content'>
          <KittDude></KittDude>

          {content}

          {this.state.modal === "showProduct" &&
            <ProductShow product={this.state.current} handleCloseModal={this.handleCloseModal}
              handlePurchaseButton={this.handlePurchaseButton} />
          }

          {this.state.modal === 'purchase' &&
            <Purchase product={this.state.current} handleCloseModal={this.handleCloseModal}></Purchase>
          }

          {this.state.moda === 'status'}

        </main>
      </div>
    );
  }
}

export default App;
