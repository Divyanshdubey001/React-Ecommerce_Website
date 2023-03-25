import { useState } from "react";
import "../Styles/slider.css";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";

const SliderFunction = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const sliderImages = [
    {
      id: 1,
      imgsrc:
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      alt: "image1",
    },
    {
      id: 2,
      imgsrc:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "image2",
    },
    {
      id: 3,
      imgsrc:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80",
      alt: "image3",
    },
    {
      id: 4,
      imgsrc:
        "https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      alt: "image4",
    },
    {
      id: 5,
      imgsrc:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
      alt: "image5",
    },
    {
      id: 6,
      imgsrc:
        "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "image6",
    },
    {
      id: 7,
      imgsrc:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
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
