import { Fragment } from "react";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";

require("./App.css");

const App = () => {
  return (
    <Fragment>
      <img className="imagenAnimada" src='https://i.ibb.co/JcDqcw2/HMEUTOFLVBSCTB8-R.gif' loading="lazy" alt="Animacion de tienda" />
      <div className="container">
        <HomePage />
      </div>
    </Fragment>
  )
}

export default App;