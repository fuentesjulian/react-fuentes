import React from "react";
import { useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../EmptyCart/EmptyCart.jsx";
import "./CartContainer.css";

function CartContainer() {
  const { myCart, total, clear } = useContext(Contexto);
  const formattedTotal = total.toLocaleString();
  return (
    <>
      {myCart.length > 0 ? (
        <div id="checkOut">
          <ul id="checkOutList" className="list-group list-group-flush">
            {myCart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <li className="list-group-item total">
              <div className="texto total">Total</div>
              <div className="precio">${formattedTotal}</div>
            </li>
          </ul>
          <button
            className="btn btn-danger"
            onClick={() => {
              clear();
            }}
          >
            Limpiar carrito
          </button>
          <button className="btn btn-success">Terminar mi compra</button>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default CartContainer;
