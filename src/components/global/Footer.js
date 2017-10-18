
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <nav class="footer">
                <p className="copy float-left">&copy; G Slinn 2017</p>
                <ul className="nav footer">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Add Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sprint">Add Sprints</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/jobs">Add new item</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tracking">Tracking</a>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Footer;