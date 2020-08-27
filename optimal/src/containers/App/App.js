import { compose } from 'redux';
import { connect } from 'react-redux';
import App from '../../pages/App/App';

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
)(App);
