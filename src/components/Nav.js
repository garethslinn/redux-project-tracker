import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Add Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/addSprint">Add Sprints</a>
                </li>
            </ul>
        )
    }
}

export default Nav;

