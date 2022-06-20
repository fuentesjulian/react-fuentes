import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import ItemCheckout from "../ItemCheckout/ItemCheckout.jsx";
import { Contexto } from "../CartContext/CartContext";
import { useState, useEffect } from "react";
import { useContext } from "react";

function ItemDetail({ item }) {
  const { addItem, myCart } = useContext(Contexto);
  let { id, title, price, image, stock, description } = item;
  const formattedPrice = price.toLocaleString();
  const initQuantity = myCart.find((item) => item.id === id) ? myCart.find((item) => item.id === id).quantity : 1;
  const [quantity, setQuantity] = useState();
  const [ordered, setOrdered] = useState(false);
  useEffect(() => {
    quantity > 0 ? setOrdered(true) : setOrdered(false);
  }, [quantity]);

  const onAdd = (q) => {
    addItem(item, q);
    setQuantity(q);
  };

  return (
    <>
      <div id="itemDetail">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body" id="itemDetailBody">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <h5>Precio: $ {formattedPrice}</h5>
                <div id="itemCount">{ordered ? <ItemCheckout /> : <ItemCount stock={stock} initial={initQuantity} onAdd={onAdd} />}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
