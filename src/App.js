import React, { useState } from "react";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import product_list from "./products";
import "./App.css";
function App() {
  const [page, setPage] = useState("product-list");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const onProductClick = (the_product) => {
    setProduct(the_product);
    setPage("product-details");
  };
  return (
    <div className="container">
      {page != "product-list" && (
        <button onClick={() => setPage("product-list")}>
          back to Product List page
        </button>
      )}
      {page == "product-list" ? (
        <ProductList
          product_list={product_list}
          onProductClick={onProductClick}
        />
      ) : (
        <Product product={product} />
      )}
    </div>
  );
}

export default App;
