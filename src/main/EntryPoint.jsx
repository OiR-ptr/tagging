/* eslint-disable */

import React from "react";
import { createMemoryHistory } from "history";
import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import SearchScreen from "../components/SearchScreen";
import ApplicationNav from "../containers/ApplicationNavContainer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history)
    // rest of your reducers
  });

const history = createMemoryHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history)
        // other middlewares
      )
    )
  );
  return store;
};

const store = configureStore(/* provide initial state if any */);

const entry = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact>
            <SearchScreen />
          </Route>
          <Route path="/about" exact>
            <div>A happy new year!!</div>
          </Route>
        </Switch>
      </ConnectedRouter>
      <ApplicationNav />
    </Provider>
  );
};

export default entry;
