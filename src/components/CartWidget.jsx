import React from "react";
import { Contexto } from "./CartContext/CartContext";
import { useContext } from "react";
import { useState, useEffect } from "react";

function CartWidget({ items }) {
  const { myCart } = useContext(Contexto);
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    let count = 0;
    myCart.forEach((item) => {
      count += item.quantity;
    });
    setItemCount(count);
  }, [myCart]);

  return(<>{(itemCount>0)?<><i className="bi bi-cart-fill"></i> {itemCount} items en carrito</>:<><i className="bi bi-cart"></i> Carrito vacio!</>}</>)
}

export default CartWidget;
