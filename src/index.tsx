import React from 'react';
// import {store} from './redux/store'
import {store} from './redux/redux-store'

import './index.css';
import {renderTree} from "./renderTree";

renderTree()

store.subscribe(() => {
    // let state = store.getState()
    renderTree()
})

