import { compose } from 'redux';
import { connect } from 'react-redux';
import HomePage from '../../pages/Home/Home';

const mapStateToProps = (state) => ({
    locale: state.locale.lang.current,

});

const mapDispatchToProps = (dispatch) => ({

});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(HomePage);
