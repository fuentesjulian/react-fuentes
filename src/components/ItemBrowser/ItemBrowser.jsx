import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import("./ItemBrowser.css");

function ItemBrowser({ categories, selectedItem }) {
  return (
    <div id="categoryList">
      <ul>
        {selectedItem ? (
          <li>
            {categories.find(({ category }) => category === selectedItem).label}
            <Link to="/"> [borrar]</Link>
          </li>
        ) : (
          categories?.map((category) => {
            return <li key={category.category}>{<Link to={`/category/${category.category}`}>{category.label}</Link>}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default ItemBrowser;
