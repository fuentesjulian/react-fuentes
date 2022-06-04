import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [q, setQ] = useState(Math.min(initial, stock));

  const sumar = () => {
    if (q < stock) setQ(q + 1);
  };

  const restar = () => {
    if (q > initial) setQ(q - 1);
  };
  return (
    <>
    <div>
      <button className="btn btn-secondary" onClick={restar}>-</button>
      <div className="cantidad">{q}</div>
      <button className="btn btn-secondary" onClick={sumar}>+</button>
      </div>
      <div className="stock">{stock > 0 ? <>Stock: {stock} unidades</> : <>Sin stock</>}</div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          onAdd(q);
        }}
      >
        Agregar al carrito
      </button>
    </>
  );
}

export default ItemCount;
