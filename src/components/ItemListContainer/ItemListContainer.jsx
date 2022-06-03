import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemLoading = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: "PR5", title: "Procesador Ryzen 5", description: "Procesador Ryzen 5 3900x", price: 36000, pictureUrl: "https://via.placeholder.com/300x200.png", stock: 5 },
          { id: "PR7", title: "Procesador Ryzen 7", description: "Procesador Ryzen 7 5800x", price: 65000, pictureUrl: "https://via.placeholder.com/300x200.png", stock: 2 },
          { id: "PI5", title: "Procesador Intel I5", description: "Procesador Intel i5 10ma generacion", price: 37000, pictureUrl: "https://via.placeholder.com/300x200.png", stock: 4 },
          { id: "PI7", title: "Procesador Intel I7", description: "Procesador Intel i7 10ma generacion", price: 67000, pictureUrl: "https://via.placeholder.com/300x200.png", stock: 4 },
          { id: "MOA", title: "Motherboard Asus", description: "Motherboard Asus Gamer Z590-e", price: 45000, pictureUrl: "https://via.placeholder.com/300x200.png", stock: 2 },
          { id: "MOG", title: "Motherboard Gigabyte", description: "Mothherboard Gigabyte Z690", price: 25000, pictureUrl: "https://via.placeholder.com/300x200.png", stock: 2 },
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

  return <div id="itemListContainer">{items.length > 0 ? <ItemList items={items} /> : <>Loading</>}</div>;
}

export default ItemListContainer;
