import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import cartReducer from './components/reducers/cartreducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

console.log("Created by Austin Fortson", '\n', 
            "Portfolio: https://austinfortson.netlify.com/", '\n',
            "LinkedIn: https://www.linkedin.com/in/austin-fortson-916b17170", '\n',
            "GitHub Code: https://github.com/AustinFortson/homedepotrental");
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));