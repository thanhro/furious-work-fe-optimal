import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

const App = (props) => {
    const {
        locale,
        history,
    } = props;
    return (
        <>
        </>
    );
};

App.defaultProps = {
    locale: 'en',
};

App.propTypes = {
    locale: PropTypes.string,
    history: PropTypes.oneOfType([() => null, PropTypes.object]).isRequired,
};

export default App;
