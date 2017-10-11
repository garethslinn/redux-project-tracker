import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Jobs from './components/Jobs';
import Users from './components/Users';
import Sprint from './components/Sprint';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from'./reducers';
import './index.css';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={ store }>
        <Router path='/' history={browserHistory}>
            <Route path='/' component={Users} />
            <Route path='/sprint' component={Sprint} />
            <Route path='/jobs' component={Jobs} />
        </Router>
    </Provider>,
    document.getElementById('root')
);