// Components
import SearchBar from "../../shared/components/ui/searchBar/SearchBar";
import CardLayout from "../../shared/components/ui/cardLayout/CardLayout";
import Card from "../../shared/components/ui/card/Card";

// Helpers
import { filterObjectsMethod } from "../../shared/helpers/FilterMethods";

// React
import React, { useState } from "react";

// Redux
import { connect } from "react-redux";

// Styles
import "./Home.scss";

const Home = ({ allHotels = [] }) => {
  const [searchedValueState, setSearchedValueState] = useState("");

  const getFilteredHotels = () => {
    const filteredHotels = filterObjectsMethod(
      allHotels,
      ["name"],
      searchedValueState
    );
    return filteredHotels;
  };

  const getHotels = () => {
    if (allHotels.length === 0) return null;

    if (getFilteredHotels().length === 0) {
      return (
        <div className="Home__hotel-not-found">
          <p>No se encontrarón hoteles con el nombre {searchedValueState}</p>
        </div>
      );
    }

    return getFilteredHotels().map(hotel => (
      <Card
        key={hotel.id}
        image={hotel.image}
        title={hotel.name}
        subtitle={hotel.address}
        // description={hotel.name}
      />
    ));
  };

  return (
    <div className="Home__container">
      <div className="Home__search">
        <SearchBar
          placeHolder={"Buscar Hotel"}
          value={searchedValueState}
          onValueSearched={value => setSearchedValueState(value)}
        />
      </div>
      <CardLayout>{getHotels()}</CardLayout>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allHotels: state.Hotel.allHotels
  };
};

export default connect(mapStateToProps)(Home);
