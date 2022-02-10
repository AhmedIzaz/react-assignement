import React from "react";

function ProductList({ product_list, onProductClick }) {
  return (
    <div>
      {product_list.map((product) => (
        <div onClick={() => onProductClick(product)}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
