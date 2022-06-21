import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import("./ItemBrowser.css");

function ItemBrowser({ navLinks, selectedItem }) {
  const [categories, setCategories] = useState([]);

 
  return (
    <div id="categoryList">
      <ul>
        {selectedItem ? (
          <li>
            {selectedItem}
            <Link to="/"> [borrar]</Link>
          </li>
        ) : (
          navLinks?.map((item) => {
            return <li key={item}>{<Link to={`/category/${item}`}>{item}</Link>}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default ItemBrowser;
