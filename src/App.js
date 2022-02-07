import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import productList from "./products";
import Loader from "./loaders/Loader";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import "./App.css";
function App() {
  const [page, setPage] = useState("products");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProducts(productList);
  }, []);

  const onProductClick = (product) => {
    setProduct(product);
    setPage("product-details");
  };

  return (
    <div className="body">
      {page == "products" ? (
        <ProductList
          onProductClick={onProductClick}
          productList={productList}
        />
      ) : (
        <Product product={product} />
      )}
    </div>
  );
}

export default App;
