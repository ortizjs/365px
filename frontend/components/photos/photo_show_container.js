import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mSTP = (state, ownProps ) => {
    // const photoId = parseInt(match.params.photoId);
    // const photo = selectBench(state.entities, photoId);
    const photo = selectBench(state.entities, photoId);
    return {
        // photoId,
        photo
    };
};

const mDTP = dispatch => ({
    fetchPhoto: id => dispatch(fetchPhoto(id))
});

export default connect(mSTP, mDTP)(PhotoShow);