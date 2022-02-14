import React, { useEffect, useState } from "react";
import Loader from "../loaders/Loader";
import "./productStyle.css";
function Product({ product }) {
  const [theProduct, setProduct] = useState(null);
  useEffect(() => setTimeout(() => setProduct(product), 1000), []);
  return (
    <>
      {!theProduct ? (
        <Loader />
      ) : (
        <div className="product-container">
          <h3>{theProduct.name}</h3>
          <p>{theProduct.description}</p>
          <small>
            <strong>{theProduct.price}</strong>
          </small>
        </div>
      )}
    </>
  );
}

export default Product;
