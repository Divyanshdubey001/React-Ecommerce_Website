import React, { useState, useEffect } from "react";

function ShoppingSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingSection;
