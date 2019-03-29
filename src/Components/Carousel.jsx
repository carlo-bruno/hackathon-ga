import React, { Component } from 'react'
import Card from './Card';

// props
// filtered products
// clicker function

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 0,
      products: this.props.products
    }
  }

  pageUp = () => {
    let up = this.state.page + 1;
    this.setState({
      page: up
    })
  }

  pageDown = () => {
    let down = this.state.page - 1;
    this.setState({
      page: down
    })
  }


  render() {
    let { page, products } = this.state

    let cards = products
      .slice(page * 4, (page + 1) * 4)
      .map((product, i) => (
        <Card key={i} product={product} handleShowProduct={() => { this.props.handleShowProduct(product) }} />
      ))

    return (
      <div className="Carousel">

        <div className="collection">
          {cards}
        </div>
        <div className="carousel-buttons">
          {page !== 0 &&
            <button onClick={() => this.pageDown()}>&larr;</button>
          }
          {cards.length === 4 &&
            <button onClick={() => this.pageUp()}>&rarr;</button>
          }
        </div>

      </div>
    )
  }
}

export default Carousel;