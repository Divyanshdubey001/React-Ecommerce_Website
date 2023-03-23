import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
// import ShoppingSection from "./Components/ShoppingSection";
import UICardstructure from "./Components/UICardstructure";
import UIPagination from "./Components/UIPagination"
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Slider />
      <UICardstructure />
      <UIPagination />
      <Footer />
      {/* <ShoppingSection /> */}
    </>
  );
}

export default App;
