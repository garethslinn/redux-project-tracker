import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser} from "../actions";


class AddSprint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sprint: '',
            startDate: '',
            endDate: ''
        }

    }
    render() {
        return (

            <div className="UsersTable">
                <div className="title">
                    Add Sprint
                </div>
                <div className="form-inline user-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="First Name."
                            type="text"
                            onChange={event => this.setState({sprint: event.target.value})}
                        />

                        <input
                            className="form-control"
                            placeholder="Second Name"
                            type="text"
                            onChange={event => this.setState({startDate: event.target.value})}
                        />

                        <input
                            className="form-control"
                            placeholder="email"
                            type="email"
                            onChange={event => this.setState({endDate: event.target.value})}
                        />


                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={ () => this.addSprint() }>
                            Add Sprint
                        </button>

                    </div>

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

export default connect(mapStateToProps, { addUser })(AddSprint);