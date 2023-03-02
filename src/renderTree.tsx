import React from 'react';
import state, {subscriber} from './redux/state'
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateInputValue} from './redux/state'

export const renderTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateInputValue={updateInputValue} />,
        document.getElementById('root')
    );
}
