// React
import React from "react";

// Styles
import "./Card.scss";

const Card = ({ image, title, subtitle, description }) => {
  return (
    <div className="Card__container">
      <div
        className="Card__image"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="Card__info">
        <h3>{title}</h3>
        <small>{subtitle}</small>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
