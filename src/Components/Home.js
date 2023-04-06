import Navbar from "./Navbar";
import Slider from "./Slider";
// import ShoppingSection from "./Components/ShoppingSection";
import UICardstructure from "./UICardstructure";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import BasicPagination from "./BasicPagination";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Home = ({ products }) => {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 9;
  let newProduts = [...products];

  const handleChange = (event, value) => {
    setcurrentPage(value);
    return;
  };

  function pagination(data, itemsPerPage, currentPage) {
    return data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }

  useEffect(() => {
    if (products) {
      setData(pagination(newProduts, itemsPerPage, currentPage));
    }
  }, [products, currentPage]);

  return (
    <>
      <Navbar />
      <Slider />
      <UICardstructure
        products={data}
        handleAddProduct={<handleAddProduct />}
      />
      <BasicPagination handleChange={handleChange} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
