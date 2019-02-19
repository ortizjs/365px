import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mSTP = (state, ownProps ) => {
    // debugger
    let photo_id = ownProps.match.params.photoId;
    let photographer_id = ownProps.match.params.photographer_id;
    let photo = state.entities.photos[photo_id];
    // console.log(photo);
    // let photographer_username = state.entities.photos[photo_id].username;
    // console.log(photographer_username);
    // debugger
    return ({
        photo_id,
        photographer_id,
        photo
    });
};

const mDTP = dispatch => {
    return ({
        fetchPhoto: id => dispatch(fetchPhoto(id))
    });
};

export default connect(mSTP, mDTP)(PhotoShow);