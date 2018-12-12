import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // console.log("Hello");
    const store = configureStore();
    window.getStore = store.getState;
    window.dispatch = store.dispatch; // testing purposes
    ReactDOM.render(<h1>Welcome to 365px!</h1>, root);
});