import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/Signup";
import { useEffect, useState } from "react";
import Home from "./Components/Home";

function App() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  if (!products) {
    return "Loading...";
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home products={products} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* <ShoppingSection /> */}
    </>
  );
}

export default App;
