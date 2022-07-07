import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "../Loading/Loading";
import "./OrderTracker.css";
import OrderSheet from "./OrderSheet";

function OrderTracker() {
  const { id } = useParams();
  const [orderIdInput, setOrderIdInput] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [order, setOrder] = useState();
  const db = getFirestore();
  const collection = "orders";

  const [loading, setLoading] = useState(false);
  const [idOK, setIdOK] = useState(false);
  const [isQuery, setIsQuery] = useState(false);

  useEffect(() => {
    if (id) {
      getOrder(id);
    }
  }, [id]);

  const getOrder = (orderKey) => {
    setLoading(true);
    setIsQuery(true);
    const itemDoc = doc(db, collection, orderKey);
    getDoc(itemDoc)
      .then((res) => {
        if (res.exists()) {
          setOrder({ ...res.data(), id: res.id });
          setIdOK(true);
        } else {
          setIdOK(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  };

  function handleInput(input) {
    setOrderIdInput(input);
  }

  useEffect(() => {
    orderIdInput.length > 0 ? setButtonDisabled(false) : setButtonDisabled(true);
  }, [orderIdInput]);

  return (
    <div id="orderTracker">
      <div className="mb-3">
        <label for="name" className="form-label">
          Completa el ID de la orden para procesar busqueda
        </label>
        <div className="input-group mb-3">
          <input id="orden" className="form-control" onChange={(e) => handleInput(e.target.value)} placeholder="ingresa el id de la orden"></input>
          <button
            className="btn btn-success"
            disabled={buttonDisabled}
            onClick={() => {
              getOrder(orderIdInput);
            }}
          >
            Buscar
          </button>
        </div>
      </div>

      {loading ? <Loading /> : idOK ? <>Mostrando datos orden: <OrderSheet order={order} /></> : isQuery?<>Los datos ingresados no corresponden a una orden.</>:<>Aqui abajo encontraras los datos del a orden.</>}
    </div>
  );
}

export default OrderTracker;
