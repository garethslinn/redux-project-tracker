import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJob } from "../actions/job_action";
import Header from './global/Header';
import Footer from './global/Footer';
import Logout from './global/Logout';
import Nav from './Nav';

class AddJobs extends Component {
    constructor(props) {
        super(props);
        const checkJobsExist = this.getJobNo()-1;
        this.state = {
            jobNo: checkJobsExist ? this.getJobNo() : 0,
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

    addJob(no) {
        this.props.addJob(
            this.state.jobNo + 1,
            this.state.title,
            this.state.jobType,
            this.state.assigned,
            this.state.role,
            this.state.sprint,
            this.state.stat,
            this.state.description,
            this.state.linked
        );
        this.setState({ jobNo: no });
    }

    handle_assigned() {
        const  { jobs } = this.props;
        return (

                <div className="col-sm-4">
                    <label htmlFor="assignedTo" className="col-sm-12 col-form-label">Assigned to:</label>
                    <select id="assignedTo" className="form-select" onChange={event => this.setState({assigned: event.target.value})}>
                        <option value="">Assigned To</option>
                    {
                        jobs.addUser.map(user => {
                            return (
                                <option key={user.id} value={user.firstName}>{user.firstName}</option>
                            )
                        })
                    }
                    </select>
                </div>

        )
    }



    handle_sprint() {
        const  { jobs } = this.props;
        return (
                <div className="col-sm-4">
                    <label htmlFor="sprint" className="col-sm-12 col-form-label">Sprint</label>
                    <select id="sprint" className="form-select" onChange={event => this.setState({sprint: event.target.value})}>
                        <option value="">Sprint</option>
                        {
                            jobs.addSprint.map(sprint => {
                                return (
                                    <option key={sprint.id} value={sprint.sprint}>{sprint.sprint}</option>
                                )
                            })
                        }
                    </select>
                </div>
        )
    }

    getJobNo() {
        const  { jobs }  = this.props;
        return jobs.addJob.length + 1;
    }


    renderJobs() {
        const  { jobs }  = this.props;
        return (

            <tbody>
            {
                jobs.addJob.map(job => {
                    return (
                        <tr key={job.id}>
                            <td>{ job.jobNo }</td>
                            <td>{ job.title }</td>
                            <td>{ job.jobType}</td>
                            <td>{ job.assigned }</td>
                            <td>{ job.role }</td>
                            <td>{ job.sprint }</td>
                            <td>{ job.stat }</td>
                            <td>{ job.description }</td>
                            <td>{ job.linked }</td>
                            <td>


                                <a
                                    href={`/views?${ job.jobNo }`}>
                                    View
                                </a>
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
                <Logout />
                <Header />
                <Nav />
                <div className="UsersTable">
                    <div className="title">
                        Add New Item
                    </div>
                    <div>
                        <div className="form-group">

                            <label htmlFor="jobNo" className="col-sm-2 col-form-label">Sprint</label>
                            <div className="col-sm-10">
                                <input
                                    id="jobNo"
                                    className="form-control"
                                    placeholder="jobNo"
                                    type="text"
                                    value={ this.getJobNo() }
                                    readOnly={true}
                                />
                            </div>

                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>

                            <div className="col-sm-10">
                                <input
                                    id="title"
                                    className="form-control"
                                    placeholder="Title"
                                    type="text"
                                    onChange={event => this.setState({title: event.target.value})}
                                />
                            </div>

                            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea
                                    id="description"
                                    className="description"
                                    rows="4"
                                    placeholder="Description"
                                    onChange={event => this.setState({description: event.target.value})}>
                                </textarea>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label htmlFor="jobType" className="col-sm-12 col-form-label">Job Type</label>
                                    <select id="jobType" className="form-select" onChange={event => this.setState({jobType: event.target.value})}>
                                        <option value="">Job Type</option>
                                        <option value="Task">Task</option>
                                        <option value="Defect">Defect</option>
                                        <option value="Epic">Epic</option>
                                        <option value="Spike">Spike</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {this.handle_assigned()}

                                <div className="col-sm-4">
                                    <label htmlFor="role" className="col-sm-12 col-form-label">Role</label>
                                    <select id="role" className="form-select" onChange={event => this.setState({role: event.target.value})}>
                                        <option value="">Role</option>
                                        <option value="Front End">Front End</option>
                                        <option value="Back End">Back End</option>
                                        <option value="Tester">Tester</option>
                                        <option value="Operations">Operation</option>
                                        <option value="Creative">Creative</option>
                                        <option value="UX">User Experience</option>
                                        <option value="Management">Management</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">

                                {this.handle_sprint()}

                                <div className="col-sm-4">
                                    <label htmlFor="status" className="col-sm-12 col-form-label">Status</label>
                                    <select id="status" className="form-select" onChange={event => this.setState({stat: event.target.value})}>
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
                                </div>

                                <div className="col-sm-4">
                                    <label htmlFor="linked" className="col-sm-12 col-form-label">Linked</label>
                                    <input
                                        id="linked"
                                        className="form-control"
                                        placeholder="linked"
                                        type="text"
                                        onChange={event => this.setState({linked: event.target.value})}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">

                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={ () => this.addJob(this.getJobNo()) }>
                            Add User
                        </button>
                        </div>

                        </div>
                    </div>

                    <div>
                        <table className="table table-striped table-responsive">
                            <thead>
                            <tr>
                                <th>JobNo</th>
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



                <Footer />
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

export default connect(mapStateToProps, { addJob })(AddJobs);

