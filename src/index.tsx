import './styles.scss';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';

import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/reducer';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl as HTMLElement);

const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

root.render(
    <Provider store={store}><App /></Provider>
)


