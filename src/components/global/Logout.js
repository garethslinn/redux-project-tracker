import React, { Component } from 'react';
import {firebaseApp} from "../../firebase";

class Logout extends Component {
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
            <div className="clearfix">
                <p className="float-left in-progress">Work in progress...</p>
                <button onClick={this.handle_logout} className="btn btn-warning float-right">Sign out</button>
            </div>
        )
    }
}

export default Logout;