import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser} from "../actions";

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

    componentDidMount() {

  }

    componentWillUnmount() {

  }


addUser() {
        this.props.addUser(
            this.state.firstName,
            this.state.secondName,
            this.state.email,
            this.state.admin,
            this.state.active
        );
        console.log('state1 ', this.state);
    }

    renderUsers() {
        const  { users }  = this.props;
        console.log('users == ', users);
        return (

            <tbody>
                {
                    users.map(user => {
                        return (

                            <tr key={user.id}>
                                <td>{ user.firstName }</td>
                                <td>{ user.secondName }</td>
                                <td>{ user.email }</td>
                                <td>{ user.admin }</td>
                                <td>{ user.active }</td>
                            </tr>

                        )
                    })
                }
            </tbody>
        )
    }

    showUsers() {

    }

    render() {
        return(
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

                        <input
                            className="form-control"
                            placeholder="admin"
                            type="checkbox"
                            onChange={event => this.setState({admin: event.target.value})}
                        />
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
                        </tr>
                        </thead>
                        {  this.renderUsers() }
                    </table>
                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state2 ', state);
    return {
        users: state
    }
}

export default connect(mapStateToProps, { addUser })(AddUsers);