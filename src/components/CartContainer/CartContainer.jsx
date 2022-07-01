import React from "react";
import { useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../EmptyCart/EmptyCart.jsx";
import "./CartContainer.css";
import { Link } from "react-router-dom";

function CartContainer() {
  const { myCart, total, clear } = useContext(Contexto);
  const formattedTotal = total.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
  return (
    <>
      {myCart.length > 0 ? (
        <div id="cartContainer">
          <ul id="cartList" className="list-group list-group-flush">
            {myCart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <li className="list-group-item total">
              <div className="texto total">Total</div>
              <div className="precio">{formattedTotal}</div>
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
          <Link to="/checkout" className="btn btn-success">
            Terminar mi compra
          </Link>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default CartContainer;
