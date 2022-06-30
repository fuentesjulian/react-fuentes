import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import ItemBrowser from "../ItemBrowser/ItemBrowser.jsx";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import Loading from "../Loading/Loading.jsx";

function ItemListContainer() {
  const { id } = useParams();

  const db = getFirestore();
  const itemCollectionName = "products";
  const itemCollection = collection(db, itemCollectionName);

  const categoryCollectionName = "categories";
  const categoryCollection = collection(db, categoryCollectionName);

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (id) {
      const itemQuery = query(itemCollection, where("category", "==", id));
      getDocs(itemQuery)
        .then((res) => {
          setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(setLoading(false));
    } else {
      getDocs(itemCollection)
        .then((res) => {
          setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(setLoading(false));
    }
  }, [id]);

  useEffect(() => {

    getDocs(categoryCollection).then((res) => {
      setCategories(res.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div id="itemListContainer">
      <section>{categories.length > 0 ? <ItemBrowser categories={categories} selectedItem={id} /> : <Loading />}</section>
      <section>{loading ? <></> : <ItemList items={items} />}</section>
    </div>
  );
}

export default ItemListContainer;
