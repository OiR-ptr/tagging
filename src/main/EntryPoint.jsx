/* eslint-disable */

import React from 'react';
import { createBrowserHistory } from 'history';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../components/App';
import { Provider } from 'react-redux';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    // rest of your reducers
});

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                // other middlewares
            )
        )
    );
    return store;
}

const store = configureStore( /* provide initial state if any */ );

const entry = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router>
                    <Switch>
                        <Route path="/" exact >
                            <App />
                        </Route>
                        <Route path="/about" >
                            <div>
                                A happy new year!!
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </ConnectedRouter>
        </Provider>
    );
}

export default entry;