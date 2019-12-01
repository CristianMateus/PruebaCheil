// Components
import Header from "./layout/header/Header";
import MainContainer from "./layout/mainContainer/MainContainer";

// Devexpress Stylesheets
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

// React
import React from "react";

// Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
