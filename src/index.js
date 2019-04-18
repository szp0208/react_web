import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {HashRouter} from 'react-router-dom';
import './css/common.css';
import './css/index.css';
import './css/style.less';


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));
