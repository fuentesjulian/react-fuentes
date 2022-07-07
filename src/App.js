import { initializeApp } from "firebase/app";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import CartContext from "./components/CartContext/CartContext";
import Checkout from "./components/Checkout/Checkout.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.jsx";
import OrderTracker from "./components/OrderTracker/OrderTracker";


function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyAhJzjC_ngqUAc9UY3kO9KrhnwocQMcRoQ",
    authDomain: "reactjs-ecommerce-coderhouse.firebaseapp.com",
    projectId: "reactjs-ecommerce-coderhouse",
    storageBucket: "reactjs-ecommerce-coderhouse.appspot.com",
    messagingSenderId: "1051770751854",
    appId: "1:1051770751854:web:6d31645fd650c004054f7f",
  };

  initializeApp(firebaseConfig);

  return (
    <CartContext>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/track" element={<OrderTracker />} />
          <Route path="/track/:id" element={<OrderTracker />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
