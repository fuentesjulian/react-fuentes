import React from "react";
import "./Checkout.css";
import { useState, useContext, useEffect } from "react";
import { Contexto } from "../CartContext/CartContext";
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import EmptyCart from "../EmptyCart/EmptyCart";
import Receipt from "../Receipt/Receipt";
import ReceiptContainer from "../ReceiptContainer/ReceiptContainer";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("Terminar compra");

  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    name && email && phone && validEmail ? setButtonDisabled(false) : setButtonDisabled(true);
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

  const NEUTRAL = "input-group-text";
  const NOTOK = "input-group-text notOK";
  const OK = "input-group-text OK";

  const [nameClass, setNameClass] = useState(NEUTRAL);
  const [emailClass, setEmailClass] = useState(NEUTRAL);
  const [phoneClass, setPhoneClass] = useState(NEUTRAL);

  function handleName(nameInput) {
    setName(nameInput);
    nameInput.length > 0 ? setNameClass(OK) : setNameClass(NOTOK);
  }

  function handleEmail(emailInput) {
    setEmail(emailInput);
    setValidEmail(isEmailValid(emailInput));
    isEmailValid(emailInput) ? setEmailClass(OK) : setEmailClass(NOTOK);
  }

  function handlePhone(phoneInput) {
    setPhone(phoneInput);
    phoneInput.length > 0 ? setPhoneClass(OK) : setPhoneClass(NOTOK);
  }

  return (
    <div id="checkOut">
      {orderId ? (
        <>
          <ReceiptContainer orderId={orderId} />
        </>
      ) : (
        <>
          {myCart.length > 0 ? (
            <form>
              <h3>Completa tus datos para terminar la compra</h3>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Nombre
                </label>
                <div className="input-group mb-3">
                  <input id="name" className="form-control" onChange={(e) => handleName(e.target.value)} placeholder="ingresa tu nombre"></input>
                  <div className={nameClass}>
                    <i class="bi bi-person"></i>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <div className="input-group mb-3">
                  <input id="email" className="form-control" onChange={(e) => handleEmail(e.target.value)} placeholder="ingresa tu email"></input>
                  <div className={emailClass}>
                    <i class="bi bi-envelope"></i>
                  </div>
                </div>
                <div className="form-text">Debes escribir un email valido para completar la compra.</div>
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">
                  Telefono
                </label>
                <div className="input-group mb-3">
                  <input
                    id="phone"
                    className="form-control"
                    onChange={(e) => handlePhone(e.target.value)}
                    onKeyDown={(e) => {
                      if (invalidPhoneInput(e)) e.preventDefault();
                    }}
                    placeholder="ingresa tu telefono"
                  ></input>
                  <div className={phoneClass}>
                    <i class="bi bi-telephone"></i>
                  </div>
                </div>
                <div className="form-text">Ingresa solo numeros, sin simbolos.</div>
              </div>
              <button
                disabled={buttonDisabled}
                onClick={() => {
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
