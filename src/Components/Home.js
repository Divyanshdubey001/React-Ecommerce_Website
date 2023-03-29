import Navbar from "./Navbar";
import Slider from "./Slider";
// import ShoppingSection from "./Components/ShoppingSection";
import UICardstructure from "./UICardstructure";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Home = ({products}) => {
  return (
    <>
      <Navbar />
      <Slider />
      <UICardstructure products={products} handleAddProduct = {<handleAddProduct />} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
