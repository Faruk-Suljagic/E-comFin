import React from "react";
import { Link } from "react-router-dom";

import "../css/Product.css";

function Product(props) {
  const { products, onAdd } = props;

  return (
    <React.Fragment>
      <div className="container" key={products.id}>
        <Link className="prodLink" to={`/details/${products.id}`}>
          <div>
            <div className="card">
              <img width="200px" height="200px" src={products.image} alt="" />
              <strong>${products.price}</strong>
              <h4>{products.title}</h4>
              <p>{products.description}</p>
            </div>
          </div>
        </Link>
        <div className="addToCart">
          <button onClick={() => onAdd(products)}>Add to cart</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Product;
