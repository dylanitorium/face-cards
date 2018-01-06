import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import user from './user';

const reducer = combineReducers({ user: user });
const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
