/* eslint-disable */

import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../components/App';

const entry = () => {
    return (
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
    );
}

export default entry;