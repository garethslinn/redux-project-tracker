import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSprint, removeSprint } from "../actions/sprint_action";
import Nav from './Nav';

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
        this.props.addSprint (
            this.state.sprint,
            this.state.startDate,
            this.state.endDate
        );
        console.log('add sprint state ', this.state);
    }

    renderSprints() {
        const  { sprints }  = this.props;
        console.log('sprints == ', sprints.addSprint);
        return (

            <tbody>
            {
                sprints.addSprint.map(sprint => {
                    return (
                        <tr key={ sprint.id }>
                            <td>{ sprint.sprint }</td>
                            <td>{ sprint.startDate }</td>
                            <td>{ sprint.endDate }</td>
                            <td><button
                                type="button"
                                className="btn btn-success"
                                onClick={ () => this.removeSprint(sprint.id) }>
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

    removeSprint(id) {
        this.props.removeSprint(id);
    }

    render() {
        return (
            <div>
            <Nav />
            <form className="UsersTable">
                <div className="title">
                    Add Sprint
                </div>
                <div className="form-inline user-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Sprint."
                            type="text"
                            required
                            onChange={event => this.setState({sprint: event.target.value})}
                        />

                        <input
                            className="form-control"
                            placeholder="Start Date: dd/mm/yyyy"
                            type="date"
                            required
                            onChange={event => this.setState({startDate: event.target.value})}
                        />

                        <input
                            className="form-control"
                            placeholder="End Date: dd/mm/yyyy"
                            type="date"
                            required
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

                <div className="container">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Sprints</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                        </thead>
                        {  this.renderSprints() }
                    </table>
                </div>

            </form>
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

export default connect(mapStateToProps, { addSprint, removeSprint })(AddSprint);