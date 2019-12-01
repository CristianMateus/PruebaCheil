// Enums
import { ToastTypeEnum } from "../../shared/enums/ToastTypeEnum";
import { PageEnum } from "../../shared/enums/PageEnum";

// Actions
import * as actionTypes from "../types/Ui";

export const showSuccessToast = message => dispatch => {
  dispatch({
    type: actionTypes.SHOW_TOAST,
    payload: { type: ToastTypeEnum.Success, message: message }
  });
};

export const showWarningToast = message => dispatch => {
  dispatch({
    type: actionTypes.SHOW_TOAST,
    payload: { type: ToastTypeEnum.Warning, message: message }
  });
};

export const showDangerToast = message => dispatch => {
  dispatch({
    type: actionTypes.SHOW_TOAST,
    payload: { type: ToastTypeEnum.Danger, message: message }
  });
};

export const setPageLoading = (pageEnum, showPageLoading) => dispatch => {
  if (!pageEnum) return;
  let pageLoading = {};
  switch (pageEnum) {
    case PageEnum.Home:
      pageLoading = { homePage: showPageLoading };
      break;
    default:
      return;
  }
  dispatch({
    type: actionTypes.SET_PAGE_LOADER,
    payload: pageLoading
  });
};
