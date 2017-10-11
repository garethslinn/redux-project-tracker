import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJob, removeJob } from "../actions/job_action";
import Nav from './Nav';

class AddJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            jobType: '',
            assigned: '',
            role: '',
            sprint: '',
            stat: '',
            description: '',
            linked: ''
        }
    }

    addJob() {
        this.props.addJob(
            this.state.title,
            this.state.jobType,
            this.state.assigned,
            this.state.role,
            this.state.sprint,
            this.state.stat,
            this.state.description,
            this.state.linked
        );
        console.log('addJob component state ', this.state);
    }


    removeJob(id) {
        this.props.removeJob(id);
    }


    renderJobs() {
        const  { jobs }  = this.props;
        console.log('jobs == ', jobs);
        return (

            <tbody>
            {
                jobs.addJob.map(job => {
                    return (
                        <tr key={job.id}>
                            <td>{ job.title }</td>
                            <td>{ job.jobType}</td>
                            <td>{ job.assigned }</td>
                            <td>{ job.role }</td>
                            <td>{ job.sprint }</td>
                            <td>{ job.stat }</td>
                            <td>{ job.description }</td>
                            <td>{ job.linked }</td>
                            <td><button
                                type="button"
                                className="btn btn-success"
                                onClick={ () => this.removeJob(job.id) }>
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
                        Add New Item
                    </div>
                    <div className="form-inline job-form container">
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Title"
                                        type="text"
                                        onChange={event => this.setState({title: event.target.value})}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="Job Type"
                                        type="text"
                                        onChange={event => this.setState({jobType: event.target.value})}
                                    />

                                    <input
                                        className="form-control"
                                        placeholder="Assigned"
                                        type="text"
                                        onChange={event => this.setState({assigned: event.target.value})}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="role"
                                        type="text"
                                        onChange={event => this.setState({role: event.target.value})}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="sprint"
                                        type="text"
                                        onChange={event => this.setState({sprint: event.target.value})}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="status"
                                        type="text"
                                        onChange={event => this.setState({stat: event.target.value})}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="description"
                                        type="text"
                                        onChange={event => this.setState({description: event.target.value})}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="linked"
                                        type="text"
                                        onChange={event => this.setState({linked: event.target.value})}
                                    />
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={ () => this.addJob() }>
                                        Add User
                                    </button>
                            </div>

                        </div>
                    </div>

                    <div className="container">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Job Type</th>
                                <th>Assigned</th>
                                <th>Role</th>
                                <th>Sprint</th>
                                <th>Status</th>
                                <th>Description</th>
                                <th>Linked</th>
                            </tr>
                            </thead>
                            { this.renderJobs() }
                        </table>
                    </div>


                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps state jobs ', state);
    return {
        jobs: state
    }
}

export default connect(mapStateToProps, { addJob, removeJob })(AddJobs);

