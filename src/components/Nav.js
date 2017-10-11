import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Add Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/sprint">Add Sprints</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/jobs">Add new item</a>
                </li>
            </ul>
        )
    }
}

export default Nav;

