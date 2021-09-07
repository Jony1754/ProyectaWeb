import React from "react";
import "../assets/styles/ImageCard.scss";
const ImageCard = ({ image, title, description }) => {
  return (
    <div className="ImageCard">
      <img src={image} alt="" className="ImageCard--image" />
      <div className="overlay">
        <h3>{title || "Test"}</h3>
        <p>{description || ""}</p>
      </div>
    </div>
  );
};

export default ImageCard;
