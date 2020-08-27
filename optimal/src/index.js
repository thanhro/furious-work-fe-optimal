import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createBrowserHistory } from 'history';

// redux
// reducers
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import reducers from './reducers';

// saga
import sagas from './sagas';

// theme
import theme from './components/Theme/Theme';

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

const middlewares = [];

if (process.env.REACT_APP_APPLY_REDUX_LOGGER) {
    middlewares.push(logger);
}

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

middlewares.push(routerMiddleware(history));

let composeEnhancers = compose;
if (process.env.REACT_APP_APPLY_REDUX_DEVTOOLS && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 });
}

const store = createStore(reducers(history), composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <CssBaseline />
            <App history={history} />
        </Provider>
    </ThemeProvider>,
    rootElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
