import React from "react";
import "./Checkout.css";
import { useState, useContext, useEffect } from "react";
import { Contexto } from "../CartContext/CartContext";
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import EmptyCart from "../EmptyCart/EmptyCart";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("Terminar compra");

  useEffect(() => {
    name && email && phone ? setButtonDisabled(false) : setButtonDisabled(true);
  }, [name, email, phone]);

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
    if (isEmailValid(email)) {
      setButtonText("Procesando compra");
      updateStocks(myCart);
      const date = new Date().toLocaleDateString();
      const items = myCart.map(({ id, title, price, quantity, subTotal }) => {
        return { id, title, price, quantity, subTotal };
      });
      const order = {
        buyer: { name, email, phone },
        items,
        date,
        total,
      };
      addDoc(orderCollection, order).then(({ id }) => {
        clear();
        setOrderId(id);
      });
    } else {
      alert("Email invalido");
    }
  }

  function invalidPhoneInput(e) {
    if (e.key === "Backspace" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Delete") return false;
    if (e.key < 48 || e.key > 57) return false;
    return true;
  }

  const isEmailValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  return (
    <div id="checkOut">
      {orderId ? (
        <>Gracias por tu compra. ID de compra: {orderId}. En breve recibirás un email con detalles del envío!</>
      ) : (
        <>
          {myCart.length > 0 ? (
            <form>
              <h3>Completa tus datos para terminar la compra</h3>
              <div className="mb-3">
              <label for="name" className="form-label">Nombre</label>
              <input id="name" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="ingresa tu nombre"></input>
              </div>
              <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="ingresa tu email"></input>
              </div>
              <div className="mb-3">
              <label for="phone" className="form-label">Telefono</label>
              <input id="phone" className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={(e) => {
                  if (invalidPhoneInput(e)) e.preventDefault();
                }}
                placeholder="ingresa tu telefono"
              ></input>
              <div className="form-text">Ingresa solo numeros, sin simbolos.</div>
              </div>
              <button
                disabled={buttonDisabled}
                onClick={(e) => {
                  setButtonDisabled(true);
                  handleClick();
                }}
                className="btn btn-success"
              >
                {buttonText}
              </button>
            </form>
          ) : (
            <EmptyCart />
          )}
        </>
      )}
    </div>
  );
}

export default Checkout;