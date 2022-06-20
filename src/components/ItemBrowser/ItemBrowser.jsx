import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import("./ItemBrowser.css");

function ItemBrowser({ items, selectedItem }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    items.forEach((item) => {
      if (!categories.includes(item.category)) {
        const temp = categories;
        temp.push(item.category);
        setCategories(temp);
      }
    });
  }, []);

  return (
    <div id="categoryList">
      <ul>
        {selectedItem ? (
          <li>
            {selectedItem}
            <Link to="/"> [borrar]</Link>
          </li>
        ) : (
          categories?.map((item) => {
            return <li key={item}>{<Link to={`/category/${item}`}>{item}</Link>}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default ItemBrowser;
