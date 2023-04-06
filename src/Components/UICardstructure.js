import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState, useEffect } from "react";
import "../Styles/shoppingsection.css";

export default function UICardstructure({ products }) {
  const data = products;

    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);


    if (ProductExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === products.id
            ? { ...ProductExits, quantity: ProductExits.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, quantity: 1 }]);
    }

  return (
    <>
      <div className="shop-title">
        <h3>Shop Bundles</h3>
        <hr></hr>
      </div>

      <div className="search-bar">
        <input
          className="input-search-bar"
          type="text"
          placeholder="Search..."

        ></input>
      </div>

      <div className="card-container">

      </div>
    </>
  );
}
