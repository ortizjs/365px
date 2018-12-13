import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as commands from './util/session_api_util';
import {login} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch; // testing purposes
    ReactDOM.render(<Root store={ store }/>, root);
});


let user1 = {
    userName: "jimmbo_123",
    email: "jimmy_h123@gmail.com",
    firstName: "Jim",
    lastName: "Halpert",
    password: "1234567"
    };
    