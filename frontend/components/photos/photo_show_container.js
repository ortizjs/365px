import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, { match }) => {
    const benchId = parseInt(match.params.benchId);
    const bench = selectBench(state.entities, benchId);
    const reviews = selectReviewsForBench(state.entities, bench);
    return {
        benchId,
        bench,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBench: id => dispatch(fetchBench(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);