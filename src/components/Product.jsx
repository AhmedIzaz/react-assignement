import React from "react";

function Product({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <small>
        <strong>{product.price}</strong>
      </small>
    </div>
  );
}

export default Product;
