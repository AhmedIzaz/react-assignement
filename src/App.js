import "./App.css";
import React, { Component } from "react";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Loader from "./loaders/Loader";
import products from "./products";

export default class App extends Component {
  state = {
    page: "products",
    products: [],
    product: null,
  };
  onProductClick = (product) => {
    this.setState({ page: "product-details", product });
  };
  componentDidMount() {
    this.setState({ products: products });
  }
  render() {
    return (
      <div className="app">
        {this.state.page == "products" ? (
          <Products onProductClick={this.onProductClick} products={products} />
        ) : (
          <ProductDetails product={this.state.product} />
        )}
      </div>
    );
  }
}
