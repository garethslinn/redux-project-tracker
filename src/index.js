import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from "./firebase";
import Jobs from './components/Jobs';
import Users from './components/Users';
import Sprint from './components/Sprint';
import Views from './components/Views';
import Tracking from './components/Tracking';
import Search from './components/Search';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { logUser } from './actions/log_user';
import reducer from'./reducers';
import SignIn from './components/SignIn';
import './index.css';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        //console.log('User has signed in or up ', user);
        const { email } = user;
        store.dispatch(logUser(email))
        //browserHistory.push('/');
    } else {
        //console.log('User has signed out or needs to sign in');
        browserHistory.replace('/signin');
    }
});

ReactDom.render(
    <Provider store={ store }>
        <Router path='/' history={browserHistory}>
            <Route path='/' component={Users} />
            <Route path='/sprint' component={Sprint} />
            <Route path='/jobs' component={Jobs} />
            <Route path='/views' component={Views} />
            <Route path='/tracking' component={Tracking} />
            <Route path='/search' component={Search} />
            <Route path='/signin' component={SignIn} />
        </Router>
    </Provider>,
    document.getElementById('root')
);