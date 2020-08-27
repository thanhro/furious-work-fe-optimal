import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import ChangeLanguageActions from '../actions/Locale';

const localeReducer = handleActions({
    [ChangeLanguageActions]: (state, action) => ({
        ...state,
        current: action.payload,
    }),
}, {
    current: 'en',
});

export default combineReducers({
    lang: localeReducer,
});
