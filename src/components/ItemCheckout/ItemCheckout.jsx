import React from 'react'
import { Link } from "react-router-dom";

function ItemCheckout() {
  return (
    <div><Link className="btn btn-success" to="/cart">Checkout</Link> <Link className="btn btn-primary" to="/">Continuar compra</Link></div>
  )
}

export default ItemCheckout