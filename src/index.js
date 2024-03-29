import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// HOC
import LoadingHandler from "./hoc/loadingHandler/LoadingHandler";
import ToastHandler from "./hoc/toastHandler/ToastHandler";

// Routing
import { BrowserRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

// Reducers
import UiReducer from "./store/reducers/Ui";
import HotelReducer from "./store/reducers/Hotel";

const rootReducer = combineReducers({
  Ui: UiReducer,
  Hotel: HotelReducer
});

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LoadingHandler>
        <ToastHandler>
          <App />
        </ToastHandler>
      </LoadingHandler>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
