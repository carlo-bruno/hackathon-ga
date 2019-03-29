import React, { Component } from 'react';
import etherium from './images/etherium.png' 
// import { Route, Link } from 'react-router-dom';

import Money from './Components/Money';
import KittDude from './Components/KittDude';

import LoadingPage from "./Pages/LoadingPage";
import Home from './Pages/Home';
import Search from './Pages/Search';

import ProductShow from './Pages/ProductShow';
import Purchase from './Components/Purchase';
import Status from './Components/Status';

import logo from "./images/kitt-logo-2.png"
import './App.css';

import { productData } from './Data/Products.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productData,
      money: 5000000,
      searchResults: [],
      current: {},
      modal: 'none',
      loading: true, /*change this on deploy */
    };
  }

  componentDidMount() {
    console.log("this is running")
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 4000)
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

  handlePurchaseConfirm = (product) => {
    // e.stopPropagation()
    this.setState((state) => {
      let money = state.money - product.price;
      return { money, modal: 'status' }
    });
  }

  render() {
    let content = <Home products={this.state.products} handleShowProduct={this.handleShowProduct} />;
    if (this.state.searchResults.length > 0) {
      content = <Search searchResults={this.state.searchResults} handleShowProduct={this.handleShowProduct} />
    }

    return (
      <div className='App'>
        <header className="Header">
          <img className="kitt-logo" src={logo} alt="Kit Logo"></img>
          <input className="search" type='text' placeholder='search' onChange={e => this.handleSearch(e)} />
          <Money money={this.state.money} />
        </header>

        <main className='Content'>
          {/* <KittDude /> */}

          {this.state.loading &&
            <LoadingPage />
          }

          {content}

          {this.state.modal === "showProduct" &&
            <ProductShow product={this.state.current} handleCloseModal={this.handleCloseModal}
              
              handlePurchaseButton={this.handlePurchaseButton} />
          }

          {this.state.modal === 'purchase' &&
            <Purchase product={this.state.current} handleCloseModal={this.handleCloseModal}
              handlePurchaseConfirm={this.handlePurchaseConfirm} />
          }

          {this.state.modal === 'status' &&
            <Status handleCloseModal={this.handleCloseModal} />
          }

        </main>
      </div>
    );
  }
}

export default App;



