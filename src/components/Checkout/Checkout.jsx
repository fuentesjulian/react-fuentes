import React from "react";
import "./Checkout.css";
import { useState, useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { myCart, total, clear } = useContext(Contexto);

  const [orderId, setOrderId] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  function updateStocks(cart) {
    cart.forEach((cartItem) => {
      const stockDoc = doc(db, "products", cartItem.id);
      updateDoc(stockDoc, { stock: cartItem.stock - cartItem.quantity });
    });
  }

  function handleClick() {
    updateStocks(myCart);

    const items = myCart.map(({ id, title, price, quantity, subTotal }) => {
      return { id, title, price, quantity, subTotal };
    });
    const order = {
      buyer: { name, email, phone },
      total,
      items,
    };
    addDoc(orderCollection, order).then(({ id }) => {
      clear();
      setOrderId(id);
    });
  }

  return (
    <div>
      {orderId ? (
        <>Gracias por tu compra. ID: {orderId}</>
      ) : (
        <>
          <h3>Completa tus datos para terminar la compra</h3>
          <input onChange={(e) => setName(e.target.value)} placeholder="ingresa tu nombre"></input>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="ingresa tu email"></input>
          <input onChange={(e) => setPhone(e.target.value)} placeholder="ingresa tu telefono"></input>
          <button
            onClick={(e) => {
              e.target.disabled = true;
              e.target.innerHTML = "Procesando compra";
              handleClick();
            }}
            className="btn btn-success"
          >
            Terminar Compra
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
