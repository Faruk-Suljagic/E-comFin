import React from "react";
import "../css/Cart.css";

function Cart(props) {
  const { cartItems, onAdd } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div>
      {/* <Link to="/details">Details</Link> */}
      <p>
        {cartItems.length === 0 ? (
          <span> Cart is empty </span>
        ) : (
          <span>Cart Quantity ({cartItems.length})</span>
        )}
      </p>
      {cartItems.map((itm) => {
        return (
          <div key={itm.id} className="cartContent">
            <span className="cartItm">{itm.title}</span>
            <br />
            <img src={itm.image} width="100px" height="100px" alt="" />
            <strong className="itmPrice">
              <h3>${itm.price}</h3>
            </strong>

            <button onClick={() => onAdd(itm)}>+</button>
            <p>{itm.qty}</p>
            <button onClick={() => onAdd(itm)}>-</button>

            <hr />
          </div>
        );
      })}
      <div>
        <h3>Total price(taxed)</h3>
        <h5 style={{ color: "pink" }}>Shipping: ${shippingPrice}</h5>
        <h2>${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;
