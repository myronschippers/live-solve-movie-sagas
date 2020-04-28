import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//
// SAGAS for API calls
// --------------------

// SAGA GETs all movies from server API and sends to movies reducer
function* getAllMovies() {
    try {
        const response = yield axios.get('/api/movies');
        yield put({
            type: 'SET_MOVIES',
            payload: response.data,
        }); // put() is the same as this.props.dispatch()
    } catch(err) {
        console.warn(err);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    // REGISTER SAGAS HERE
    yield takeLatest('GET_ALL_MOVIES', getAllMovies);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//
// REDUCERS for storing state
// --------------------

// Used to store movies returned from the server
// REDUCER STORING MOVIES
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
// REDUCER FOR STORING MOVIE GENRES
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        // REDUCERS ARE REGISTERED
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
