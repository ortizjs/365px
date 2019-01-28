import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as commands from './util/session_api_util';
import * as commands2 from './util/photo_api_util';
import {login} from './actions/session_actions';
import { fetchPhotos, fetchPhoto} from './actions/photo_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    window.getState = store.getState;
    window.dispatch = store.dispatch; // just for testing!
    window.fetchPhotos = fetchPhotos;
    // window.fetchPhoto = fetchPhoto;
});

// let user1 = {
//     userName: "jimmbo_123",
//     email: "jimmy_h123@gmail.com",
//     firstName: "Jim",
//     lastName: "Halpert",
//     password: "1234567"
//     };

// let post2 = {
//     title: "This is a test photo post",
//     photographer_id: 14,
//     photo_url: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--277c6270d219edebacdf72e9b0a8e48a472f15e3/el-salvador777-.jpg)--)"
// };

