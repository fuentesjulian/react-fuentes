import React, { useState, useEffect } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [q, setQ] = useState(Math.min(initial, stock));

  useEffect(() => {
    if (stock > 0) {
      onAdd(q);
    }
  }, [q]);

  return (
    <>
      <div className="col col-sm-3">
        <div className="input-group ">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              if (q > 0) {
                setQ(q - 1);
              }
            }}
          >
            -
          </button>
          <input type="text" className="col col-sm-2" value={q} readOnly />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              if (stock > q) {
                setQ(q + 1);
              }
            }}
          >
            +
          </button>
        </div>
      </div>
      Stock = {stock}
      <br />
      Inicial ={initial}
      <br />
      <button className="btn btn-primary">Agregar al carrito</button>
    </>
  );
}

export default ItemCount;
