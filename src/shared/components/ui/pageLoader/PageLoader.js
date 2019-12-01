// React
import React, { Fragment } from "react";

// Styles
import "./PageLoader.scss";

const PageLoader = () => {
  return (
    <Fragment>
      <div className="PageLoader__shadow" />
      <div className="PageLoader__container">
        <div className="PageLoader__loader" />
      </div>
    </Fragment>
  );
};

export default PageLoader;
