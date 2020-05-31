import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from "./App";
import "./styles.scss";
import allReducers from './reducers/allReducers';
import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk));

var mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    mountNode
);