import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/app.scss';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));
