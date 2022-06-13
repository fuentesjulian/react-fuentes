import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

function ItemList({ items }) {
  return (
    <div id="itemList">
      {
          items?.map((item)=>(<Item key={item.id} item={item}/>))
      }
    </div>
  );
}

export default ItemList;
