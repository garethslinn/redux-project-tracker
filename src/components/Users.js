import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser } from "../actions/user_action";
import Nav from './Nav';

class AddUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            email: '',
            admin: '',
            active: ''
        }
    }

    addUser() {
        this.props.addUser(
            this.state.firstName,
            this.state.secondName,
            this.state.email,
            this.state.admin,
            this.state.active
        );
        console.log('addUser component state ', this.state);
    }


    removeUser(id) {
        this.props.removeUser(id);
    }


    renderUsers() {
        const  { users }  = this.props;
        console.log('users == ', users.addUser);
        return (

            <tbody>
                {
                    users.addUser.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{ user.firstName }</td>
                                <td>{ user.secondName }</td>
                                <td>{ user.email }</td>
                                <td>{ user.admin }</td>
                                <td>{ user.active }</td>
                                <td><button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={ () => this.removeUser(user.id) }>
                                    Remove
                                </button>
                                </td>
                            </tr>

                        )
                    })
                }
            </tbody>
        )
    }


    render() {
        return(
            <div>
                <Nav />
            <div className="UsersTable">
                <div className="title">
                    Add Users
                </div>
                <div className="form-inline user-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="First Name."
                            type="text"
                            onChange={event => this.setState({firstName: event.target.value})}
                            />

                        <input
                            className="form-control"
                            placeholder="Second Name"
                            type="text"
                            onChange={event => this.setState({secondName: event.target.value})}
                        />

                        <input
                            className="form-control"
                            placeholder="email"
                            type="email"
                            onChange={event => this.setState({email: event.target.value})}
                        />
                        <label>Admin</label>
                        <input
                            className="form-control"
                            placeholder="admin"
                            type="checkbox"
                            onChange={event => this.setState({admin: event.target.value})}
                        />
                        <label>Active</label>
                        <input
                            className="form-control"
                            placeholder="active"
                            type="checkbox"
                            onChange={event => this.setState({active: event.target.value})}
                        />

                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={ () => this.addUser() }>
                            Add User
                        </button>

                    </div>
                </div>

                 <div className="container">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Active</th>
                            <th>Remove User</th>
                        </tr>
                        </thead>
                        {  this.renderUsers() }
                    </table>
                </div>


            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps state ', state);
    return {
        users: state
    }
}

export default connect(mapStateToProps, { addUser, removeUser })(AddUsers);