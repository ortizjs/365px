import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserPhotos from './user_photos';
import { fetchPhotos, deletePhoto } from '../../actions/photo_actions';

const mSTP = (state, ownProps) => {
    // debugger
    let photos = Object.values(state.entities.photos);
    return ({
        photos: photos,
        user_id: state.session.id
    });
};

const mDTP = (dispatch) => {
    return ({
        fetchPhotos: () => dispatch(fetchPhotos()),
        deletePhoto: photoId => dispatch(deletePhoto(photoId))
    });
};

export default connect(mSTP, mDTP)(UserPhotos);