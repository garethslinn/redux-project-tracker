import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSprint } from "../actions/addSprint";


class AddSprint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sprint: '',
            startDate: '',
            endDate: ''
        }

    }

    addSprint() {
        this.props.addSprint(
            this.state.sprint,
            this.state.startDate,
            this.state.endDate,
        );
        console.log('state1 ', this.state);
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
    console.log('state sprint ', state);
    return {
        sprints: state
    }
}

export default connect(mapStateToProps, { addSprint })(AddSprint);