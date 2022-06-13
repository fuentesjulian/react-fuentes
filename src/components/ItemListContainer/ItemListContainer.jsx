import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import ItemBrowser from "../ItemBrowser/ItemBrowser.jsx";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const { id } = useParams();

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const myUrl = "https://run.mocky.io/v3/ab3ab053-792c-406b-8524-eb0e70f07b3f";
  const fetchItems = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setSelectedItems(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    id ? setSelectedItems(items.filter((item) => item.category === id)) : setSelectedItems(items);
  }, [id]);

  useEffect(() => {
    fetchItems(myUrl);
  }, []);

  return (
    <div id="itemListContainer">
      <section id="greeting">{greeting}</section>
      <section>{items.length > 0 ? <ItemBrowser items={items} selectedItem={id}/> : <></>}</section>
      <section>{items.length > 0 ? <ItemList items={selectedItems} /> : <>Loading</>}</section>
    </div>
  );
}

export default ItemListContainer;
