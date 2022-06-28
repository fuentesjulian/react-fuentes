import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const { id } = useParams();

  const [item, setItem] = useState();

  const coleccion = "products";
  const db = getFirestore();

  useEffect(() => {
    const itemDoc = doc(db, coleccion, id);
    getDoc(itemDoc)
      .then((res) => {
        if (res.exists()) {
          setItem({ ...res.data(), id: res.id });
        } else {
          console.log("Item vacio");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return <>{item ? <ItemDetail item={item} /> : <>Loading</>}</>;
}

export default ItemDetailContainer;
