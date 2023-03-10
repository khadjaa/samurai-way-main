import React from 'react';
import {store} from './redux/state'
import './index.css';
import {renderTree} from "./renderTree";

renderTree()

store.subscriber(renderTree)