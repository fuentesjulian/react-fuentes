import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door-fill"> </i>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item" id="cuentaCarrito">
              <Link className="nav-link" to="/cart">
                <CartWidget items={4} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
