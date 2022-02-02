import React, { Component } from "react";
import Loader from "../loaders/Loader";
import "./productDetailsStyles.scss";
export default class ProductDetails extends Component {
  state = {
    product: null,
  };
  componentDidMount() {
    setTimeout(() => this.setState({ product: this.props.product }), 1000);
  }
  componentWillUnmount() {
    this.setState({ product: null });
  }
  render() {
    return (
      <>
        {!this.state.product ? (
          <Loader />
        ) : (
          <div className="product-details">
            <h3>{this.state.product.name}</h3>
            <p>{this.state.product.description}</p>
            <div className="product-details-footer">
              <span>{this.state.product.category}</span>
              <span>{this.state.product.price}</span>
            </div>
          </div>
        )}
      </>
    );
  }
}
