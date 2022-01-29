import { configureStore, createStore, applyMiddleware } from '@reduxjs/toolkit';
import todoListReducer from './reducer';

export const store = createStore(todoListReducer);