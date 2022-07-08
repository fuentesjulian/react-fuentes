import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import ItemCountUpdate from "../ItemCountUpdate/ItemCountUpdate.jsx";
import ItemCheckout from "../ItemCheckout/ItemCheckout.jsx";
import { Contexto } from "../CartContext/CartContext";
import { useState, useEffect } from "react";
import { useContext } from "react";

function ItemDetail({ item }) {
  const { addItem, myCart, isInCart } = useContext(Contexto);
  let { id, title, price, image, stock, description } = item;
  const formattedPrice = price.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
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
      <div className="itemDetail">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col">
              <div className="card-body" id="itemDetailBody">
                <div className="card-title">
                  {title}
                  {isInCart(id) ? <div className="inCart">En Carrito</div> : <></>}
                </div>
                <p className="card-text">{description}</p>
                <h5 className="price">Precio: {formattedPrice.substring(0,formattedPrice.length-3)}<div className="decimals">{formattedPrice.substring(formattedPrice.length-2,formattedPrice.length)}</div></h5>
                {ordered ? <ItemCheckout /> : isInCart(id) ? <ItemCountUpdate stock={stock} initial={initQuantity} onAdd={onAdd} id={id} /> : <ItemCount stock={stock} initial={initQuantity} onAdd={onAdd} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
