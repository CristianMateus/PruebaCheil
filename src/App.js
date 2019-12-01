// Components
import Header from "./layout/header/Header";
import MainContainer from "./layout/mainContainer/MainContainer";
import HotelAdmin from "./pages/hotelAdmin/HotelAdmin";
import Home from "./pages/home/Home";
import NotFound404 from "./pages/notFound404/NotFound404";

// Devexpress Stylesheets
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

// React
import React from "react";
import { Switch, Route } from "react-router-dom";

// Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <Switch>
          <Route path="/admin" component={HotelAdmin} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound404} />
        </Switch>
      </MainContainer>
    </div>
  );
}

export default App;
