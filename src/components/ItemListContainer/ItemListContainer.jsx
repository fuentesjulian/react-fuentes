import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";

function ItemListContainer({greeting}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemLoading = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: "PR5", title: "Procesador Ryzen 5", description: "Procesador Ryzen 5 3900x", price: 36000, pictureUrl: "./assets/img/ryzen5.PNG", stock: 0 },
          { id: "PR7", title: "Procesador Ryzen 7", description: "Procesador Ryzen 7 5800x", price: 65000, pictureUrl: "./assets/img/ryzen7.PNG", stock: 2 },
          { id: "PI5", title: "Procesador Intel I5", description: "Procesador Intel i5 10ma generacion", price: 37000, pictureUrl: "./assets/img/i5.PNG", stock: 4 },
          { id: "PI7", title: "Procesador Intel I7", description: "Procesador Intel i7 10ma generacion", price: 67000, pictureUrl: "./assets/img/i7.PNG", stock: 4 },
          { id: "MOA", title: "Motherboard Asus", description: "Motherboard Asus Gamer Z590-e", price: 45000, pictureUrl: "./assets/img/asus.PNG", stock: 2 },
          { id: "MOG", title: "Motherboard Gigabyte", description: "Mothherboard Gigabyte Z690", price: 25000, pictureUrl: "./assets/img/gigabyte.PNG", stock: 2 },
        ]);
      }, 2000);
    });

    itemLoading
      .then((result) => {
        setItems(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <div id="itemListContainer">
      <section id="itemList">{greeting}</section>
      <section>{items.length > 0 ? <ItemList items={items} /> : <>Loading</>}</section>
    </div>
  );
}

export default ItemListContainer;
