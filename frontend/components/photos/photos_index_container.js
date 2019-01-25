import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PhotosIndex from './photos_index';
import { fetchPhotos, deletePhoto, updatePhoto } from '../../actions/photo_actions';
// import { updatePhoto } from '../../util/photo_api_util';

const mSTP = ( state, ownProps ) => {
    // debugger
    let photos = Object.values(state.entities.photos);
    return ({
        photos: photos,
        user_id: state.session.id
    });
};

const mDTP = (dispatch) => {
    return ({
        fetchPhotos: () => dispatch(fetchPhotos())
        // editPhoto: (photo) => dispatch(updatePhoto(photo)),
        // deletePhoto: photoId => dispatch(deletePhoto(photoId))
    });
};

export default connect(mSTP, mDTP)(PhotosIndex);