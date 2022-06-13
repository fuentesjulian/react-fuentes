import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
  let { id, title, price, image, stock } = item;

  const formattedPrice = price.toLocaleString();

  return (
    <div className="itemCard">
      <img className="card-img" src={image} alt="Card image cap" />
      <div className="itemCard-body">
        <div className="itemCard-bodyTop">
          <p className="itemCard-title">{title}</p>
        </div>
        <div className="itemCard-bodyBottom">
          <div className="itemCard-price">$ {formattedPrice}</div>
          <div className="itemCard-stock">{stock > 0 ? <>Stock: {stock} unidades</> : <>Sin stock</>}</div>
          <div className="col-md-12 text-center itemCard-btn">
            {(stock>0)?<Link className="btn-buy" to={`/item/${id}`}>Comprar</Link>:<div className="btn-buy-disabled">Comprar</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
