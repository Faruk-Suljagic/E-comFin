import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";
import "../css/Details.css";
import Header from "./Header";

function Details(props) {
  const [fetchProd, setProd] = useState([]);
  console.log(fetchProd);

  const productId = props.match.params.productId;
  useEffect(() => {
    const prodId = productId;
    Axios.get(`https://fakestoreapi.com/products/${prodId}`)
      .then((res) => {
        console.log(res.data);

        setProd(res.data);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);
  return (
    <>
      <Header className="magnet" />
      <Link className="backBtn" to="/">
        <i class="fas fa-chevron-left"></i> Back
      </Link>
      <div className="detailContainer">
        <div className="detailWrapper">
          <img width="450px" height="450px" src={fetchProd.image} alt="" />
          <hr style={{ margin: "0px 4rem" }} />
          <div className="detailText">
            <strong>
              <h4>{fetchProd.title}</h4>
            </strong>

            <p>{fetchProd.description}</p>

            <h5>
              Price of this Item is: <h3>${fetchProd.price}</h3>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
