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

  return(<>{(itemCount>0)?<><i className="bi bi-cart-fill"></i> {itemCount}</>:<><i className="bi bi-cart"></i></>}</>)
}

export default CartWidget;
