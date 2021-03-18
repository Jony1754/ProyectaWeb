import React from "react";
import "../assets/styles/Programs.scss";
const Program = ({ name, image, description }) => {
  return (
    <div className="program">
      <div className="program--image">
        <img src={image} alt="" />
      </div>
      <div className="program--description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Program;
