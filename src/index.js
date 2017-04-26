import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { combineReducers, creatStore } from 'redux';
import cartReducer from './Reducers/products';
import productsReducers from './Reducers/products';
import app from './app';
import productsData from './data/products';
import 'bootstrap/dist/css/bootstrap.css';

const rootReducers = conbineReducers({
  cart: cartReducer,
  products: productsReducers
});

let store = creatStore(
  rootReducers,
  {
    products: productsData
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
=======
import { combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';
import App from './App';
import productsData from './data/products';
import 'bootstrap/dist/css/bootstrap.css';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData // initial store values
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

>>>>>>> origin/master
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
