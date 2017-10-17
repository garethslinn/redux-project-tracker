import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser } from "../actions/user_action";
import Nav from './Nav';
import Header from './global/Header';
import Footer from './global/Footer';

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
                                    className="btn btn-danger"
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


            <div className="container">
                <Header />
                <Nav />
            <div className="UsersTable">
                <div className="title">
                    Add Users
                </div>

                <div className="form-group row">
                    <label for="firstName" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input
                            id="firstName"
                            className="form-control"
                            placeholder="First Name."
                            type="text"
                            onChange={event => this.setState({firstName: event.target.value})}
                        />
                    </div>

                    <label for="lastName" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input
                            id="lastName"
                            className="form-control"
                            placeholder="Last Name"
                            type="text"
                            onChange={event => this.setState({secondName: event.target.value})}
                        />
                    </div>

                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            id="email"
                            className="form-control"
                            placeholder="Email"
                            type="text"
                            onChange={event => this.setState({email: event.target.value})}
                        />
                    </div>


                </div>

                <div className="form-group">

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={ () => this.addUser() }>
                        Add User
                    </button>

                </div>


                 <div className="container">
                    <table className="table table-striped table-responsive">
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
            <Footer />
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