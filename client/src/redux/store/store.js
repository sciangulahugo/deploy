import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import breeds from '../reducers/breedReducers.js';
import loader from '../reducers/loaderReducers.js';
import thunk from 'redux-thunk';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const reducers = combineReducers({
    breeds: breeds,
    loader: loader,
    // Aca van los demas reducers.
    // loader: loader,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
