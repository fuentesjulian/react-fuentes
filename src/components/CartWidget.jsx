import React from "react";

function CartWidget({ items }) {
  if (items > 0) {
    return (
      <>
        <i className="bi bi-cart-fill"></i> {items} items en carrito
      </>
    );
  } else {
    return (
      <>
        <i className="bi bi-cart"></i> {items} items en carrito
      </>
    );
  }
}

export default CartWidget;
