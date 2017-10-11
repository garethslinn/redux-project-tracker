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

    handle_assigned() {
        const  { jobs } = this.props;
        return (
            <select className="form-select" onChange={event => this.setState({assigned: event.target.value})}>
                <option value="">Assigned To</option>
            {
                jobs.addUser.map(user => {
                    return (
                        <option key={user.id} value={user.firstName}>{user.firstName}</option>
                    )
                })
            }
            </select>
        )
    }

    handle_sprint() {
        const  { jobs } = this.props;
        return (
            <select className="form-select" onChange={event => this.setState({sprint: event.target.value})}>
                <option value="">Sprint</option>
                {
                    jobs.addSprint.map(sprint => {
                        return (
                            <option key={sprint.id} value={sprint.sprint}>{sprint.sprint}</option>
                        )
                    })
                }
            </select>
        )
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
                    <div className="container">
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Title"
                                        type="text"
                                        onChange={event => this.setState({title: event.target.value})}
                                    />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">

                                    <textarea
                                        className="description"
                                        rows="4"
                                        placeholder="Description"
                                        onChange={event => this.setState({description: event.target.value})}>

                                    </textarea>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <select className="form-select" onChange={event => this.setState({jobType: event.target.value})}>
                                        <option value="">Job Type</option>
                                        <option value="Task">Task</option>
                                        <option value="Defect">Defect</option>
                                        <option value="Epic">Epic</option>
                                        <option value="Spike">Spike</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    {this.handle_assigned()}

                                </div>
                                <div className="col">

                                    <select className="form-select" onChange={event => this.setState({role: event.target.value})}>
                                        <option value="">Role</option>
                                        <option value="Front Ennd">Front End</option>
                                        <option value="Back End">Back End</option>
                                        <option value="Tester">Tester</option>
                                        <option value="Operations">Operation</option>
                                        <option value="Creative">Creative</option>
                                        <option value="UX">User Experience</option>
                                        <option value="Management">Management</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    {this.handle_sprint()}

                                </div>
                                <div className="col">

                                    <select className="form-select" onChange={event => this.setState({stat: event.target.value})}>
                                        <option value="">Status</option>
                                        <option value="To do">To do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Deploy to test">Deploy to test</option>
                                        <option value="Testing">Testing</option>
                                        <option value="Done">Done</option>
                                        <option value="Blocked">Blocked</option>
                                        <option value="Rejected">Rejected</option>
                                        <option value="Out of scope">Out of scope</option>
                                    </select>

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

