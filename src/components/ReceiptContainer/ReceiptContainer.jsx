import React from "react";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Receipt from "../Receipt/Receipt";

function ReceiptContainer({ orderId }) {
  const [order, setOrder] = useState();

  const collection = "orders";
  const db = getFirestore();

  useEffect(() => {
    const itemDoc = doc(db, collection, orderId);
    getDoc(itemDoc)
      .then((res) => {
        if (res.exists()) {
          setOrder({ ...res.data(), id: res.id });
        } else {
          console.log("Item vacio");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return order ? <Receipt order={order} /> : <>Cargando factura</>;
}

export default ReceiptContainer;
