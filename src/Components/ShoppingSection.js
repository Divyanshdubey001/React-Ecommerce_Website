// import { useEffect, useState } from "react";
// import "../Styles/shoppingsection.css";

// const ShoppingSection = () => {
//   const [data, setData] = useState([]);

//   const fetchItems = () => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   return (
//     <>
//       <div className="shop-bundles">
//         <div className="shop-title">
//           <h2>Shop Bundles</h2>
//           <hr></hr>
//         </div>
//       </div>
//       <ul>
//         {data.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ShoppingSection;

// import React, { useState, useEffect } from 'react';

// function ShoppingSection() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {data.map(product => (
//           <li key={product.id}>{product.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingSection;

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
