import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

function ItemList({ items }) {
  return (
    <div id="itemList">
      {
          items?.map((item)=>(<div key={item.id}><Item item={item}/></div>))
      }
    </div>
  );
}

export default ItemList;
