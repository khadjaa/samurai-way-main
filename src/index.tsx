import React from 'react';
import {subscriber} from './redux/state'
import './index.css';
import {renderTree} from "./renderTree";

renderTree()

subscriber(renderTree)