import React from "react";
import { useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import "./CartItem.css";

function CartItem({ cartItem }) {
  let { id, title, price, image, stock, quantity, subTotal } = cartItem;
  const formattedPrice = price.toLocaleString();
  const formattedSubtotal = subTotal.toLocaleString();
  const { removeItem } = useContext(Contexto);
  return (
    <li className="list-group-item">
      <div className="imagen">
        <img src={image} alt="" />
      </div>
      <div className="texto">
        <div className="nombre">{title}</div>
        <div className="precio-unit">Precio unitario ${formattedPrice}</div>
      </div>
      <div className="cantidad">{quantity}</div>
      <div className="precio">${formattedSubtotal}</div>
      <div
        className="eliminar"
        onClick={() => {
          removeItem(id);
        }}
      >
        <i className="bi bi-trash"></i>
      </div>
    </li>
  );
}

export default CartItem;
