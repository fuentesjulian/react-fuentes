import React from "react";
import { Link } from "react-router-dom";
import background from "../../img/background.PNG";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Link to="/"><img src={background} /></Link>
    </header>
  );
}
