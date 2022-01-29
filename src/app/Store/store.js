import { configureStore, createStore, applyMiddleware } from '@reduxjs/toolkit';
import todoListReducer from './reducer';
import thunk from 'redux-thunk';

export const store = createStore(todoListReducer,{},applyMiddleware(thunk));