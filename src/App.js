import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.jsx";
import { createContext } from "react";
import CartContext from "./components/CartContext/CartContext";

export const MiContexto = createContext({});

function App() {
  

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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
