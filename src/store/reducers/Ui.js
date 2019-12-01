import * as actionTypes from "../types/Ui";

const initialState = {
  toast: {
    type: null,
    message: null
  },
  loading: {
    homePage: true
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_TOAST:
      return { ...state, toast: { ...action.payload } };
    case actionTypes.SET_PAGE_LOADER:
      return { ...state, loading: { ...state.loading, ...action.payload } };
    default:
      return state;
  }
};

export default reducer;
