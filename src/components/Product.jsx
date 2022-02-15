import React, { useEffect, useState } from "react";
import Loader from "../loaders/Loader";
import { Button } from "../styledComponents";
import "./productStyle.css";
function Product({ product, onPageChange }) {
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
          <Button onClick={() => onPageChange("product-list")}>
            back to Product List page
          </Button>
        </div>
      )}
    </>
  );
}

export default Product;
