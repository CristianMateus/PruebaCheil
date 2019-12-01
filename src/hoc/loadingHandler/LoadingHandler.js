// Components
import PageLoader from "../../shared/components/ui/pageLoader/PageLoader";

// React
import React, { Fragment, useEffect, useState } from "react";

// Redux
import { connect } from "react-redux";

const LoadingHandler = ({ pagesLoadingState, children }) => {
  const [showLoaderState, setShowLoaderState] = useState(true);

  useEffect(() => {
    const pagesLoading = Object.values(pagesLoadingState);
    const isAnyPageLoading = pagesLoading.find(
      pageLoading => pageLoading === true
    );
    if (isAnyPageLoading) {
      return setShowLoaderState(true);
    }
    setShowLoaderState(false);
  }, [pagesLoadingState]);

  return (
    <Fragment>
      {showLoaderState && <PageLoader />}
      {children}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    pagesLoadingState: state.Ui.loading
  };
};

export default connect(mapStateToProps)(LoadingHandler);
