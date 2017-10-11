import React, { Component } from 'react';
import Nav from './Nav';

class Views extends Component {
    constructor(props) {
        super();
    }

    getId() {
        console.log(window.location.pathname.split("/").pop());
    }

    render() {
        return (
            <div>
            { this.getId() }
                <h1>Views</h1>
            </div>
        )
    }
}

export default Views;

