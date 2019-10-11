import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import cartReducer from './components/reducers/cartreducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));