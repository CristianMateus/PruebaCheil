// Actions
import * as actionTypes from "../types/Hotel";

// Enums
import { PageEnum } from "../../shared/enums/PageEnum";

// Mockups
import { allHotels } from "../../mockups/HotelsMockup";

// UiActions
import { setPageLoading, showSuccessToast } from "../actions/Ui";

export const setAllHotels = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: actionTypes.SET_ALL_HOTELS,
      payload: allHotels
    });
    dispatch(setPageLoading(PageEnum.Home, false));
    dispatch(showSuccessToast('Hoteles obtenidos!'));
  }, [2000]);
};
