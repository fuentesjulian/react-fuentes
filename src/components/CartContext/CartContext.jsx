import React from "react";
import { createContext, useState, useEffect } from "react";

export const Contexto = createContext({});

function CartContext({ children }) {
  const [myCart, setMyCart] = useState(JSON.parse(localStorage.getItem('myCart')) ?? []);

  const addItem = (item, quantity) => {
    const cartItem = { ...item, quantity: quantity, subTotal: item.price * quantity };
    isInCart(cartItem.id)
      ? setMyCart(
          myCart.map((item) => {
            if (item.id === cartItem.id) {
              item.quantity = cartItem.quantity;
              item.subTotal = item.quantity * item.price;
            }
            return item;
          })
        )
      : setMyCart([...myCart, cartItem]);
  };

  const removeItem = (itemId) => {
    setMyCart(myCart.filter((item) => item.id != itemId));
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = myCart.reduce((accumulator, item) => {
      return accumulator + item.subTotal;
    }, 0);
    setTotal(sum);
    localStorage.setItem('myCart', JSON.stringify(myCart));
  }, [myCart]);

  const clear = () => {
    setMyCart([]);
  };
  const isInCart = (id) => {
    return myCart.some((item) => item.id === id);
  };

  return <Contexto.Provider value={{ myCart, addItem, total, removeItem, clear }}>{children}</Contexto.Provider>;
}

export default CartContext;
