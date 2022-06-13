import React from "react";
import { Link } from "react-router-dom";
import("./ItemBrowser.css");

function ItemBrowser({ items, selectedItem }) {
  let categoryArray = [];
  items.forEach((item) => {
    if (!categoryArray.includes(item.category)) categoryArray.push(item.category);
  });

  

  return (
    <div id="categoryList">
      <ul>
        {categoryArray?.map((item) => {
          if (item===selectedItem) {
            return <li key={item}>{item}</li>;
          } else {
            return <li key={item}>{<Link to={`/category/${item}`}>{item}</Link>}</li>;
          }
        })
        }
        {(selectedItem)? <li><Link to="/">borrar filtros</Link></li>:<li>borrar filtros</li>}
        
      </ul>
    </div>
  );
}

export default ItemBrowser;
