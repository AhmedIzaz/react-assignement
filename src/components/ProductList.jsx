import React from "react";
import "./productListStyle.css";
function ProductList({ product_list, onProductClick }) {
  return (
    <div>
      {product_list.map((product) => (
        <div onClick={() => onProductClick(product)}>
          <h1 className="product-name">{product.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
