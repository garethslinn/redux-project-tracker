import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import AddUsers from './components/AddUsers';
import AddSprint from './components/AddSprint';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from'./reducers';
import './index.css';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={ store }>
        <Router path='/' history={browserHistory}>
            <Route path='/' component={AddUsers} />
            <Route path='/addsprint' component={AddSprint} />
        </Router>
    </Provider>,
    document.getElementById('root')
);