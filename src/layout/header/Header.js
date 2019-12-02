// Estilo
import "./Header.scss";

// React
import React from "react";

// React Icons
import { IoIosMap } from "react-icons/io";

const Header = () => {
  return (
    <div className="Header__container">
      <IoIosMap/>
      <h5>Cristian M.</h5>
    </div>
  );
};

export default Header;
