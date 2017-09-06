import {combineReducers} from 'redux'
import navReducer from './navigation'

const rootReducer=combineReducers({
    nav:navReducer
})

export default rootReducer