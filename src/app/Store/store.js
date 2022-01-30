import {createStore, applyMiddleware} from 'redux';
import todoListReducer from './reducer';
import thunk from 'redux-thunk';

export const store = createStore(todoListReducer, applyMiddleware(thunk));
