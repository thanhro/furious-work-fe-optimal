import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// components
import Home from '../../containers/Home/Home';

const App = (props) => {
    const {
        locale,
        history,
    } = props;
    return (
        <>
            <ConnectedRouter history={history}>
                <IntlProvider locale={locale}>
                    <Switch>
                        <Route path="/home-page" exact component={Home} />
                    </Switch>
                </IntlProvider>
            </ConnectedRouter>
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
