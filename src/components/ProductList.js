import React, { Component } from "react";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Doom" },
        { id: 2, name: "Quake" }],
      cart: []
    };
  }

  addToCart = (product) => {
    const newCartItem = { ...product }
    this.setState(prevState => ({
      cart: {
        ...prevState.cart,
        newCartItem
      }
    }))
  }

  render() {
    return (
      <div>
        <h2>Cart</h2>
        {this.state.cart.map(
          (cartItem, index) => <div key={index}>{cartItem.name}</div>
        )}
        <h2>ProductList</h2>
        {this.state.products.map(product => (
          <div onClick={() => this.addToCart(product)} key={product.id}>
            {product.name}
          </div>
        ))}
      </div>
    );
  }
}
