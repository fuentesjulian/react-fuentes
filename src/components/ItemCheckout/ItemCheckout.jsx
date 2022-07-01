import React from 'react'
import { Link } from "react-router-dom";
import "./ItemCheckout.css"

function ItemCheckout() {
  return (
    <div id="itemCheckout"><Link className="btn-buy" to="/">Seguir comprando</Link><Link className="btn-cart" to="/cart">Go to cart</Link></div>
  )
}

export default ItemCheckout