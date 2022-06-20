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
    <>
    <div>
      <button className="btn btn-secondary" onClick={restar}>-</button>
      <div className="cantidad">{counter}</div>
      <button className="btn btn-secondary" onClick={sumar}>+</button>
      </div>
      <div className="stock">{stock > 0 ? <>Stock: {stock} unidades</> : <>Sin stock</>}</div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          if (stock > 0) onAdd(counter);
        }}
      >
        Agregar al carrito
      </button>
    </>
  );
}

export default ItemCount;
