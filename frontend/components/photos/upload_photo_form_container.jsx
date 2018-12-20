import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadForm from './upload_photo_form';
import { createPhoto } from '../../actions/photo_actions';

const mSTP = (state, ownProps) => {
    let currentUser = state.currentUser;
    // debugger
    let photo = {
        title: "",
        photographerId: "",
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

export default connect(mSTP, mDTP)(UploadForm);