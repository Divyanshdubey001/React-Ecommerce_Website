import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import "../Styles/shoppingsection.css";

export default function MultiActionAreaCard() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(products);

  if (!products) {
    return "loading...";
  }

  return (
    <>
      <div className="shop-title">
        <h3>Shop Bundles</h3>
        <hr></hr>
      </div>
      <div className="card-container">
        {products.map((product) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea className="card-area">
              <CardMedia
                component="img"
                height="240"
                image={product.thumbnail}
                alt={product.title}
                className="class_image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className="card_body"
                  component="div"
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_desc"
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_price"
                >
                  Price : ${product.price}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_rating"
                >
                  Rating : {product.rating} stars
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_stock"
                >
                  Availability : {product.stock}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_brand"
                >
                  Brand : {product.brand}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="class_brand"
                >
                  Category : {product.category}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Shop Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
