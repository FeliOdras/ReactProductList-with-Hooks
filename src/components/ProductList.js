import React, { Component } from "react";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{ id: 1, name: "Doom" }, { id: 2, name: "Quake" }],
      cart: []
    };
  }

  render() {
    return (
      <div>
        <h2>Cart</h2>
        <h2>ProductList</h2>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
