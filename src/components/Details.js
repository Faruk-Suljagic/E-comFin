import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Axios from "axios";
import "../css/Details.css";
import Header from "./Header";

function Details(props) {
  const [fetchProd, setProd] = useState([]);

  let history = useHistory();

  const productId = props.match.params.productId;

  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProd(res.data);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, [productId]);
  return (
    <>
      <Header className="magnet" />

      <button className="backBtn" onClick={history.goBack}>
        <i className="fas fa-chevron-left"></i> Back
      </button>
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
              Price of this Item is: <strong>${fetchProd.price}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
