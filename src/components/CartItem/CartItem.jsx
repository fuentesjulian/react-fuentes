import React from "react";
import { useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import "./CartItem.css";

function CartItem({ cartItem }) {
  let { id, title, price, image, stock, quantity, subTotal } = cartItem;
  let item = { id, title, price, image, stock };
  const formattedPrice = price.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
  const formattedSubtotal = subTotal.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
  const { removeItem, addItem } = useContext(Contexto);

  const sumar = () => {
    if (quantity < stock) addItem(item, quantity + 1);
  };

  const restar = () => {
    if (quantity > 1) addItem(item, quantity - 1);
  };

  return (
    <li className="list-group-item">
      <div className="imagen">
        <img src={image} alt="" />
      </div>
      <div className="texto">
        <div className="nombre">{title}</div>
        <div className="precio-unit">Precio unitario {formattedPrice}</div>
      </div>
      <div className="cantidad">
        <button
          className="cartButton"
          onClick={() => {
            restar();
          }}
        >
          <i className="bi bi-dash-circle"></i>
        </button>
        {quantity}
        <button
          className="cartButton"
          onClick={() => {
            sumar();
          }}
        >
          <i className="bi bi-plus-circle"></i>
        </button>
      </div>
      <div className="precio">{formattedSubtotal}</div>
      <div className="eliminar">
        <button
          className="cartButton"
          onClick={() => {
            removeItem(id);
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default CartItem;
