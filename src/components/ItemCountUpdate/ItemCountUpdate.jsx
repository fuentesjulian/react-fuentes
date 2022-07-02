import React from "react";
import { useState, useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import YesNoModal from "../YesNoModal/YesNoModal";
import "./ItemCountUpdate.css";

function ItemCountUpdate({ stock, initial, onAdd, id }) {
  const [counter, setCounter] = useState(Math.min(initial, stock));
  const { removeItem } = useContext(Contexto);

  const modalTitle = "Borrar item";
  const modalText = "Está seguro que quiere eliminar el item del carrito?";

  const sumar = () => {
    if (counter < stock) setCounter(counter + 1);
  };

  const restar = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  const removeThisItem = () => {
    removeItem(id);
  };

  return (
    <>
      <div id="itemCount">
        <div>
          <button className="itemButton" onClick={restar}>
            <i className="bi bi-dash-circle"></i>
          </button>
          <div className="cantidad">{counter}</div>
          <button className="itemButton" onClick={sumar}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
        <div className="stock">{stock > 0 ? <>Stock: {stock} unidades</> : <>Sin stock</>}</div>
        <button
          className="btn-buy"
          onClick={() => {
            if (stock > 0) onAdd(counter);
          }}
        >
          Actualizar cantidad
        </button>
        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <YesNoModal modalTitle={modalTitle} modalText={modalText} modalFunction={removeThisItem} />
    </>
  );
}

export default ItemCountUpdate;
