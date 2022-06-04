import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount.jsx";
import onAdd from "./components/onAdd";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer greeting={"Hola Mundo!!!"}/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      <Footer />
    </>
  );
}

export default App;