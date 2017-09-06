import {createStore} from 'redux'
import rootReducer from './Modules'

const configureStore=()=>{
    return createStore(rootReducer)
}

export default configureStore