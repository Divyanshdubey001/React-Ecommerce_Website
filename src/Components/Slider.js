import { useState } from "react";
import "../Styles/slider.css";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";

const SliderFunction = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const sliderImages = [
    {
      id: 1,
      imgsrc: "https://i.dummyjson.com/data/products/29/1.jpg",
      alt: "image1",
    },
    {
      id: 2,
      imgsrc: "https://i.dummyjson.com/data/products/1/3.jpg",
      alt: "image2",
    },
    {
      id: 3,
      imgsrc: "https://i.dummyjson.com/data/products/6/3.png",
      alt: "image3",
    },
    {
      id: 4,
      imgsrc: "https://i.dummyjson.com/data/products/11/2.jpg",
      alt: "image4",
    },
    {
      id: 5,
      imgsrc: "https://i.dummyjson.com/data/products/16/4.jpg",
      alt: "image5",
    },
    {
      id: 6,
      imgsrc: "https://i.dummyjson.com/data/products/25/1.png",
      alt: "image6",
    },
    {
      id: 7,
      imgsrc: "https://i.dummyjson.com/data/products/27/1.jpg",
      alt: "image7",
    },
  ];
  const HandlenextClick = () => {
    const newImage =
      currentImage === sliderImages.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(newImage);
  };

  const handlePrevClick = () => {
    const newImage =
      currentImage === 0 ? sliderImages.length - 1 : currentImage - 1;
    setCurrentImage(newImage);
  };

  return (
    <>
      <div className="image-slider-container">
        <img
          src={sliderImages[currentImage].imgsrc}
          alt={sliderImages[currentImage].alt}
          className="image-slide"
        ></img>
        <div className="left-arrow">
          <ArrowCircleLeftTwoToneIcon onClick={handlePrevClick} />
        </div>
        <div className="right-arrow">
          <ArrowCircleRightTwoToneIcon onClick={HandlenextClick} />
        </div>
      </div>
    </>
  );
};

export default SliderFunction;
