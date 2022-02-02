import React, { Component } from "react";
import Loader from "../loaders/Loader";
import "./productStyles.scss";
export default class Products extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    setTimeout(() => this.setState({ products: this.props.products }), 1000);
  }
  componentWillUnmount() {
    this.setState({ products: [] });
  }
  render() {
    return (
      <>
        {this.state.products.length < 1 ? (
          <Loader />
        ) : (
          <div className="products-page">
            <h2>Products</h2>
            <div className="product-list">
              {this.state.products.map((product, index) => (
                <div
                  className="product"
                  onClick={() => this.props.onProductClick(product)}
                >
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}
