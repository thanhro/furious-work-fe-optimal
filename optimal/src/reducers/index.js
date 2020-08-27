import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import locale from './Locale';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    locale,
});

export default createRootReducer;
