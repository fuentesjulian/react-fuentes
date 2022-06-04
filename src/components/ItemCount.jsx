import React, { useState, useEffect } from "react";

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
      <div className="col col-sm-3">
        <div className="input-group ">
          <button className="btn btn-outline-secondary" type="button" onClick={restar}>
            -
          </button>
          <input type="text" className="col col-sm-2" value={q} readOnly />
          <button className="btn btn-outline-secondary" type="button" onClick={sumar}>
            +
          </button>
        </div>
      </div>
      Stock = {stock}
      <br />
      Inicial ={initial}
      <br />
      <button
        className="btn btn-primary"
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
