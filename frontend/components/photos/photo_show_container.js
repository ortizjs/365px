import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mSTP = (state, ownProps ) => {
    // const photoId = parseInt(match.params.photoId);
    // const photo = selectBench(state.entities, photoId);
    let photo_id = ownProps.match.params.photoId;
    let photogrpher_id = ownProps.match.params.photographer_id;
    // let photogrpher_id = state.session.photos[photo];
    // let photo = state.entities.photos[photo_id];
    let photo = state.entities.photos;
    console.log(photo);

    return ({
        photo_id,
        photogrpher_id,
        photo
    });
};

const mDTP = dispatch => {
    return ({
        fetchPhoto: id => dispatch(fetchPhoto(id))
    });
};

export default connect(mSTP, mDTP)(PhotoShow);