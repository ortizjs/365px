import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    CLEAR_ERRORS,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: undefined
});

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:   
            return oldState;
    }
};

export default sessionReducer;