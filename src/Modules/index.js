import {combineReducers} from 'redux';
import navReducer from './navigation';
import authentication from './authentication';
import {reducer as formReducer} from 'redux-form'

const rootReducer=combineReducers({
    nav:navReducer,
    form:formReducer,
    authentication
})

export default rootReducer