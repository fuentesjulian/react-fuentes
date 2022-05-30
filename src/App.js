import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <h2>Las ofertas de la semana</h2>
    </>
  );
}

export default App;
