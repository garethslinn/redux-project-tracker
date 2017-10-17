import React, { Component } from 'react';
import {firebaseApp} from "../../firebase";

class Header extends Component {
    constructor(props) {
        super();
    }

    handle_logout() {
        firebaseApp.auth().signOut().then(function() {
            console.log('You have logged out');
        }, function(error) {
            console.log('An error occurred whilst logging out');
        });
    }

    render() {
        return (
            <div>
                <div className="clearfix">
                    <h5>Work in progress...</h5>
                    <button onClick={this.handle_logout} className="btn btn-warning float-right">Sign out</button>
                </div>
                <div className="clearfix">
                    <h1 className="float-left title">Project Tracker</h1>
                </div>
            </div>
        )
    }
}

export default Header;