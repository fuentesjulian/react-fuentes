import React from "react";
import { useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../EmptyCart/EmptyCart.jsx";
import "./CartContainer.css";
import { Link } from "react-router-dom";
import YesNoModal from "../YesNoModal/YesNoModal";

function CartContainer() {
  const { myCart, total, clear } = useContext(Contexto);
  const formattedTotal = total.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
  const modalTitle = "Borrar carrito";
  const modalText = "Está seguro que quiere eliminar el carrito?";
  return (
    <>
      {myCart.length > 0 ? (
        <>
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
            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal">
              Limpiar carrito
            </button>
            <Link to="/checkout" className="btn btn-success">
              Terminar mi compra
            </Link>
          </div>
          <YesNoModal modalTitle={modalTitle} modalText={modalText} modalFunction={clear} />
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default CartContainer;
