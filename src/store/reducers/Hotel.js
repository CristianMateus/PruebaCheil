import * as actionTypes from "../types/Hotel";

const initialState = {
  allHotels: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_HOTELS:
      return { ...state, allHotels: action.payload };
    default:
      return state;
  }
};

export default reducer;
