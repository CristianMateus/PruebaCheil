// React
import React, { Fragment, useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { ToastTypeEnum } from "../../shared/enums/ToastTypeEnum";

// Toast
import { toast } from "react-toastify";

const ToastHandler = ({ reduxToast, children }) => {
  useEffect(() => {
    if ((!reduxToast.type || !reduxToast.message) && reduxToast.type !== 0)
      return;
    switch (reduxToast.type) {
      case ToastTypeEnum.Success:
        toast.success(reduxToast.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        break;
      case ToastTypeEnum.Warning:
        toast.warn(reduxToast.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        break;
      case ToastTypeEnum.Danger:
        toast.error(reduxToast.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        break;
      default:
        toast.error(' ', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
    }
  }, [reduxToast]);
  
  return <Fragment>{children}</Fragment>;
};

const mapStateToProps = state => {
  return {
    reduxToast: state.Ui.toast
  };
};

export default connect(mapStateToProps)(ToastHandler);
