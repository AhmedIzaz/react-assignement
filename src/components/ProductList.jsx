import React, { useEffect, useState } from "react";

function ProductList({ onProductClick, productList }) {
  const [products, setProducts] = useState([]);
  useEffect(() => setProducts(productList), []);
  console.log("product list");
  return (
    <div className="product-list-wrapper">
      {products.map((product) => (
        <div onClick={() => onProductClick(product)}>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
