import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadForm from './upload_photo_form';
import { createPhoto } from '../../actions/photo_actions';

const mSTP = (state, ownProps) => {
    // let currentUserId = state.entities.users[1].id;
    let currentUserId = state.session.id;
    let photo = {
        title: "",
        category: "",
        description: "",
        camera: "",
        lens: "",
        date_taken: "",
        iso: "",
        focal_distance: "",
        shatter_speed: "",
        aperture: "",
        location: "",
        photographerId: currentUserId,
        photoFile: null
    };
    return ({
        photo: photo
    });
};

const mDTP = (dispatch) => {
    return ({
        createPhoto: (photo) => dispatch(createPhoto(photo))
    });
};

export default withRouter(connect(mSTP, mDTP)(UploadForm));