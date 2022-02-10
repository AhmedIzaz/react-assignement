import React, { useState } from "react";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import product_list from "./products";
import "./App.css";
import Loader from "./loaders/Loader";
import { useEffect } from "react/cjs/react.development";
function App() {
  const [page, setPage] = useState("product-list");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const onProductClick = (the_product) => {
    setProduct(the_product);
    setPage("product-details");
  };

  useEffect(() => setTimeout(() => setProducts(product_list), 1000), []);
  return (
    <>
      {products.length < 1 ? (
        <Loader />
      ) : (
        <div className="container">
          {page != "product-list" && (
            <button onClick={() => setPage("product-list")}>
              back to Product List page
            </button>
          )}
          {page == "product-list" ? (
            <ProductList
              product_list={products}
              onProductClick={onProductClick}
            />
          ) : (
            <Product product={product} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
