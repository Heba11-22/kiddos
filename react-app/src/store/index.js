// All of the root reduce

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from './session';
import item from './items';
import mainCategories from './mainCategories';
import search from './search';
import categories from './categories';
import savedItems from './savedItems';
import categoryItems from './items';
import allItems from './allItems';
import cartItems from './cart';

const rootReducer = combineReducers({
    session,
    item,
    search,
    mainCategories,
    categories,
    savedItems,
    allItems,
    categoryItems,
    cartItems
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default; // to show the the state on the console
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;