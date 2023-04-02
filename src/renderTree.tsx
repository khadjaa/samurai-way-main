import React from 'react';
// import {store} from './redux/store'
import {store} from './redux/redux-store'
import ReactDOM from 'react-dom';
import App from './App';

export const renderTree = () => {
    debugger
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
