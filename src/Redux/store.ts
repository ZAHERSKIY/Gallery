import {createStore, applyMiddleware} from 'redux';
import photoReducer from './photoReducer';
import createSagaMiddleware from '@redux-saga/core';
import {photoWatcher} from './saga/photoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(photoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(photoWatcher);

export default store;
