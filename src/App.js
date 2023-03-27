import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
// import ShoppingSection from "./Components/ShoppingSection";
import UICardstructure from "./Components/UICardstructure";
import Footer from "./Components/Footer";
import Newsletter from "./Components/Newsletter";


import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  if(!products){
    return "Loading..."
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Slider />
      <UICardstructure products={products} />
      <Newsletter />
      <Footer />
      {/* <ShoppingSection /> */}
    </>
  );
}

export default App;