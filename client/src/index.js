//thes is the file where your going to connect your react application to you index html file

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' //its allow us to access state from anywhere
import {createStore ,applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './App';
const store = createStore(reducers ,compose(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <App/> 
</Provider>, document.getElementById('root'));