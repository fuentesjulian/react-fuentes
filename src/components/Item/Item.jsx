import React from "react";
import "./Item.css"

function Item({ item }) {
  let {id, title, description, price, pictureUrl, stock} = item;
  return (
    <div className="card">
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Precio: {price}</p>
        <p className="card-text">Stock: {stock}</p>
        <button href="#" className="btn btn-primary">
          Go somewhere
        </button>
      </div>
    </div>
  );
}

export default Item;
