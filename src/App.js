import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./components/Product";
import Cart from "./components/Cart";

import Header from "./components/Header";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { Container } from "@material-ui/core";

function App(props) {
  const [cart, setCart] = useState(false);
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <Container maxWidth="lg" fixed>
      <Header />

      <div className="hero">
        <div className="wrapper">
          {product.map((prod) => (
            <Product
              products={prod}
              key={prod.id}
              onAdd={onAdd}
              cartItems={cartItems}
            />
          ))}
        </div>
        <div>
          <button
            className="cartBtn"
            color="secondary"
            onClick={() => setCart(!cart)}
          >
            <i className="fas fa-cart-plus"></i>
          </button>
          <div className={cart === false ? "hideCart" : "cart openCart"}>
            <div className="cart">
              <Cart cartItems={cartItems} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
