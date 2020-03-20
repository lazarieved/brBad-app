import {applyMiddleware, compose, createStore} from 'redux'
import {rootReducer} from "../reducers";
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
export const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(thunk)
))
