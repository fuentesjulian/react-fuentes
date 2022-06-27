import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCart.css";
import cartLogo from "../../img/cartlogo.PNG";

function EmptyCart() {
  return (
    <div id="checkOut">
      <h2>El carrito está vacío</h2>
      <div id="cartLogo">
        <img src={cartLogo} />
      </div>
      <Link className="btn btn-dark" to="/">
        Ir a Comprar!
      </Link>
    </div>
  );
}

export default EmptyCart;
