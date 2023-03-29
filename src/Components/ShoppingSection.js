import { useEffect, useState } from "react";
import "../Styles/shoppingsection.css";

function ShoppingSection() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(products);

  if (!products) {
    return "loading...";
  }

  return (
    <div className="card-container">
      <div className="shop-title">
        <h2>Shop Bundles</h2>
        <hr></hr>
      </div>
      <div className="card-wrapper">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt={product.title} className="imgs" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-price">${product.price}</p>
              <p className="card-rating">{product.rating} stars</p>
              <p className="stock">{product.stock}</p>
              <p className="brand">{product.brand}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingSection;
