import React, { useEffect, useState } from "react";

function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <small>{product.description}</small>
    </div>
  );
}

export default Product;
