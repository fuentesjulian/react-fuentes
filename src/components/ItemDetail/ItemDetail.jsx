import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx"
import onAdd from "../onAdd"

function ItemDetail({ item }) {
  let { id, title, price, image, stock, description } = item;
  const formattedPrice = price.toLocaleString();

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
                <div id="itemCount"><ItemCount stock={stock} initial={1} onAdd={onAdd} /></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
