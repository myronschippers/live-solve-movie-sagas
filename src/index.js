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
function* getAllMovies(action) {
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

function* getMovie(action) {
    try {
        const movieId = action.payload;
        const response = yield axios.get(`/api/movies/details/${movieId}`);
        yield put({
            type: 'SET_DETAILS',
            payload: response.data[0],
        }); // put() is the same as this.props.dispatch()
    } catch(err) {
        console.warn(err);
    }
}

function* getMovieGenres(action) {
    try {
        const movieId = action.payload;
        const response = yield axios.get(`/api/movies/genres/${movieId}`);
        yield put({
            type: 'SET_GENRES',
            payload: response.data,
        })
    } catch(err) {
        console.warn(err);
    }
}

function* putMovieDetails(action) {
    try {
        const movieId = action.payload.id;
        yield axios.put(`/api/movies/edit/${movieId}`, action.payload);
        yield put({
            type: 'GET_MOVIE',
            payload: movieId,
        });
        yield put({
            type: 'GET_MOVIE_GENRES',
            payload: movieId,
        });
    } catch(err) {
        console.warn(err);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    // REGISTER SAGAS HERE
    yield takeLatest('GET_ALL_MOVIES', getAllMovies);
    yield takeLatest('GET_MOVIE', getMovie);
    yield takeLatest('GET_MOVIE_GENRES', getMovieGenres);
    yield takeLatest('PUT_MOVIE', putMovieDetails);
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

const details = (state = {}, action) => {
    switch(action.type) {
        case 'SET_DETAILS':
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
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
