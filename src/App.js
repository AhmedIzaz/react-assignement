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
  const change_page = (page_name) => setPage(page_name);
  useEffect(() => setTimeout(() => setProducts(product_list), 1000), []);
  return (
    <>
      {products.length < 1 ? (
        <Loader />
      ) : (
        <div className="container">
          {page == "product-list" ? (
            <ProductList
              product_list={products}
              onProductClick={onProductClick}
            />
          ) : (
            <Product product={product} onPageChange={change_page} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
