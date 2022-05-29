import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <h2>Las ofertas de la semana</h2>
    </div>
  );
}

export default App;
