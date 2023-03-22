import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import ShoppingSection from "./Components/ShoppingSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Slider />
      <ShoppingSection />
    </>
  );
}

export default App;
