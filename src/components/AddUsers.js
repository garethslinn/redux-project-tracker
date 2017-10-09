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

    addUser() {
        this.props.addUser(
            this.state.firstName,
            this.state.secondName,
            this.state.email,
            this.state.admin,
            this.state.active
        );
    }

    render() {
        return(
            <div className="App">
                <div className="title">
                    Add Users
                </div>
                <div className="form-inline user-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="First Name."
                            type="text"
                            onChange={event => this.setState( {firstName: event.target.value} ) }
                            />

                        <input
                            className="form-control"
                            placeholder="Second Name"
                            type="text"
                            onChange={event => this.setState( {secondName: event.target.value} ) }
                        />

                        <input
                            className="form-control"
                            placeholder="email"
                            type="email"
                            onChange={event => this.setState( {email: event.target.value} ) }
                        />

                        <input
                            className="form-control"
                            placeholder="admin"
                            type="checkbox"
                            onChange={event => this.setState( {admin: event.target.value} ) }
                        />
                        <input
                            className="form-control"
                            placeholder="active"
                            type="checkbox"
                            onChange={event => this.setState( {active: event.target.value} ) }
                        />


                    </div>




                </div>

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={ () => this.addUser() }>
                    Add User
                </button>


            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state ', state);
    return {
        users: state
    }
}

export default connect(mapStateToProps, { addUser })(AddUsers);