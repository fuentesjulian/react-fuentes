import React from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "./Item.css";
import onAdd from "../onAdd"

function Item({ item }) {
  let { id, title, description, price, pictureUrl, stock } = item;
  return (
    <div className="itemCard">
      <img className="card-img" src={pictureUrl} alt="Card image cap" />
      <div className="itemCard-body">
        <div className="itemCard-bodyTop">
          <h5 className="itemCard-title">{title}</h5>
          <p className="itemCard-description">{description}</p>
        </div>
        <div className="itemCard-bodyBottom">
          <div className="itemCard-price">$ {price.toLocaleString()}</div>
          <div className="itemCard-stock">{stock > 0 ? <>Stock: {stock} unidades</> : <>Sin stock</>}</div>
          <div className="col-md-12 text-center itemCard-btn">
          <button className="btn-buy" disabled={!(stock>0)}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
