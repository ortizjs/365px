import merge from 'lodash/merge';

import {
    RECEIVE_PHOTOS,
    RECEIVE_PHOTO,
    REMOVE_PHOTO} from '../actions/photo_actions';

const PhotosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return actions.photos;
        case RECEIVE_PHOTO:
            newState = merge({}, oldState, {[action.photo.id]: action.photo});
            return newState;
        case REMOVE_PHOTO:
            newState = merge({}, oldState);
            delete newState[action.id];
            return newState;
        default:
        return oldState;
    }
};

export default PhotosReducer;
