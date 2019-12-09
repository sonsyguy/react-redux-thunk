import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import List from './component/list';
import store from './store'

ReactDOM.render(
    <Provider store={store}><List /></Provider>
, document.getElementById('root'));
