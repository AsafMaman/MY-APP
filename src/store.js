import {applyMiddleware, createStore,compose} from 'redux'
import rootReducer from './Modules'

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore=()=>{
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(...middlewares)
        )
    )
}

export default configureStore