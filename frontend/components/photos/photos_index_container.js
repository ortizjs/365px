import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PhotosIndex from './photos_index';
import { fetchPhotos, deletePhoto, updatePhoto } from '../../actions/photo_actions';

const mSTP = ( state, ownProps ) => {
    let photos = Object.values(state.entities.photos);
    // let userName = Object.values(state.entities.users)[0].user_name;
    // console.log("These are the photos and their ID's: ", photos.forEach(photo => console.log(photo.id)));
    // debugger
    return ({
        // userName: userName,
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