// React
import React, { useRef, useEffect } from "react";

// Styles
import "./SearchBar.scss";

const SearchBar = ({ placeHolder, value, onValueSearched }) => {
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputRef = useRef();

  return (
    <div className="SearchBar__container">
      <input
        ref={inputRef}
        type="text"
        placeholder={placeHolder}
        value={value ? value : ""}
        onChange={e => onValueSearched(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
