import React from "react";
import CartWidget from "../CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">
                <i className="bi bi-house-door-fill"> </i>
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="nosotros.html">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contacto.html">
                Contacto
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item" id="cuentaCarrito">
              <a className="nav-link" href="#">
                <CartWidget items={4} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
