import React from 'react';
import {store} from './redux/state'
import ReactDOM from 'react-dom';
import App from './App';

export const renderTree = () => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} updateInputValue={store.updateInputValue.bind(store)} />,
        document.getElementById('root')
    );
}
