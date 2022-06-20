import React from "react";
import { useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";

function CartContainer() {
  const { myCart, total } = useContext(Contexto);
  const formattedTotal = total.toLocaleString();
  return (
    <ul id="checkOut" className="list-group list-group-flush">
      {myCart.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <li className="list-group-item total">
        <div className="texto total">Total</div>
        <div className="precio">${formattedTotal}</div>
      </li>
    </ul>
  );
}

export default CartContainer;
