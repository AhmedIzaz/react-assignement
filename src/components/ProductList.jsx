import { Grid } from "@material-ui/core";
import React from "react";
import "./productListStyle.css";
function ProductList({ product_list, onProductClick }) {
  return (
    <Grid spacing={4} container>
      {product_list.map((product) => (
        <Grid item xs={10} sm={5} md={3} lg={2}>
          <div
            onClick={() => onProductClick(product)}
            className="product-list-item"
          >
            <h3>{product.name}</h3>
            <p>category : {product.category}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;

{
  /* <div>
{product_list.map((product) => (
  <div onClick={() => onProductClick(product)}>
    <h1 className="product-name">{product.name}</h1>
  </div>
))}
</div> */
}
