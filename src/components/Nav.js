import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Add users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sprint">Add sprints</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/jobs">Add new job</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tracking">Tracking</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Search jobs</a>
                    </li>
                </ul>
            </nav>
        )

    }
}

export default Nav;

