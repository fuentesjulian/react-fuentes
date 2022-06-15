import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import("./ItemBrowser.css");

function ItemBrowser({ items, selectedItem }) {
  // Este codigo funciona, pero quiero reemplazarlo por useState para hacerlo dinamico
  // let categories = [];
  // items.forEach((item) => {
  //   if (!categories.includes(item.category)) categories.push(item.category);
  // });

  // Este codigo NO funciona, el spread operator no se ejecuta creo
  // const [categories, setCategories] = useState([]);
  // items.forEach((item) => {
  //   if (!categories.includes(item.category)) setCategories(categories =>[...categories, item.category]);
  // });


  // este codigo tmb funciona
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
        {categories?.map((item) => {
          if (item === selectedItem) {
            return <li key={item}>{item}</li>;
          } else {
            return <li key={item}>{<Link to={`/category/${item}`}>{item}</Link>}</li>;
          }
        })}
        {selectedItem ? (
          <li>
            <Link to="/">borrar filtros</Link>
          </li>
        ) : (
          <li>borrar filtros</li>
        )}
      </ul>
    </div>
  );
}

export default ItemBrowser;
