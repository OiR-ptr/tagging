/* eslint-disable */

import React from 'react';
import {createBrowserHistory} from "history";
import {routerReducer, routerMiddleware, ConnectedRouter} from "react-router-redux";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import App from '../components/App';

const historyObject = createBrowserHistory();
const middleware = routerMiddleware(historyObject);
const store = createStore(routerReducer, applyMiddleware(middleware));

console.log(historyObject);
console.log(store);

const entry = () => {
    return (
        <div>
            A happy new year
            <App />
        </div>
    );
}

export default entry;