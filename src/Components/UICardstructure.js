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

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  //cart State
  const [cartItems, setCartItems] = useState([]);

  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);


  //Adding items to the cart
  const handleAddProduct = (products) => {
    const ProductExits = cartItems.find((item) => item.id === products.id);
    
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
  };

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
        {currentItems.map((item) => (
          <Card sx={{ maxWidth: 375, margin: 1.5 }}>
            <CardActionArea className="card-area">
              <CardMedia
                component="img"
                height="240"
                image={item.thumbnail}
                alt={item.title}
                className="class_image"
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className="card_body"
                  component="div"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_desc"
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_price"
                >
                  Price : ${item.price}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_rating"
                >
                  Rating : {item.rating} stars
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_stock"
                >
                  Availability : {item.stock}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_brand"
                >
                  Brand : {item.brand}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_brand"
                >
                  Category : {item.category}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={handleAddProduct}>
                Add to Cart
              </Button>
              <Button size="small" color="primary">
                Remove from Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
