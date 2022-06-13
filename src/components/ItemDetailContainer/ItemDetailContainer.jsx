import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  const myUrl = "https://run.mocky.io/v3/ab3ab053-792c-406b-8524-eb0e70f07b3f";
  const fetchItem = (url, id) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.filter((item) => item.id === parseInt(id)));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchItem(myUrl, id);
  }, []);

  return <>{item.length > 0 ? <ItemDetail item={item[0]} /> : <>Loading</>}</>;
}

export default ItemDetailContainer;
