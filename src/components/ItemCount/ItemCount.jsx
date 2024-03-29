import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(Math.min(initial, stock));

  const sumar = () => {
    if (counter < stock) setCounter(counter + 1);
  };

  const restar = () => {
    if (counter > 1) setCounter(counter - 1);
  };
  return (
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
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
