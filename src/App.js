import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer greeting={"Hola Mundo!!!"}/>
    </>
  );
}

export default App;
