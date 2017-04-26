import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
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
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
