// Estilos
import "./CardLayout.scss";

// React
import React from "react";

const CardLayout = ({ children, autoFillCards = true }) => {
  return (
    <div
      className="CardLayout__container"
      style={
        autoFillCards
          ? { gridTemplateColumns: "repeat(auto-fill, minmax(14em, 1fr)" }
          : { gridTemplateColumns: "repeat(auto-fit, minmax(14em, 1fr)" }
      }
    >
      {children}
    </div>
  );
};

export default CardLayout;
