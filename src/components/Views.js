import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editJob } from "../actions/job_action";
import Header from './global/Header';
import Footer from './global/Footer';
import Nav from './Nav';

class ViewJobs extends Component {
    constructor(props) {
        super(props);

        const view = this.getJob();
        view.map(job => {
            this.state = {
                jobNo: job.jobNo,
                title: job.title,
                jobType: job.jobType,
                assigned: job.assigned,
                role: job.role,
                sprint: job.sprint,
                stat: job.stat,
                description: job.description,
                linked: job.linked
            }
        });

        console.log(this.state)
    }


    getJob() {
        let id = parseFloat(window.location.search.substring(1));
        let { jobs } = this.props;

        jobs = jobs.addJob.filter(function(job) {
            return job.id === id;
        });

        return jobs;
    }

    getJobNo() {
        const  { jobs }  = this.props;
        return jobs.addJob.length + 1;
    }

    getView() {

        let jobs = this.getJob();

        return (
            <div>
                {
                    jobs.map(job => {

                        return (

                            <div className="row" key={job.id} >
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="jobNo"
                                        type="text"
                                        value={ this.getJobNo() }
                                        readOnly={true}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="Title"
                                        type="text"
                                        defaultValue={job.title}
                                        onChange={event => this.setState({title: event.target.value})}
                                    />
                                    <div className="row">
                                        <div className="col">

                                    <textarea
                                        className="description"
                                        rows="4"
                                        placeholder="Description"
                                        defaultValue={ job.description }
                                        onChange={event => this.setState({description: event.target.value})}>

                                    </textarea>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <select className="form-select" onChange={event => this.setState({jobType: event.target.value})}>
                                                <option value={ job.jobType }>{ job.jobType }</option>
                                                <option value="Task">Task</option>
                                                <option value="Defect">Defect</option>
                                                <option value="Epic">Epic</option>
                                                <option value="Spike">Spike</option>
                                                <option value="Other">Other</option>
                                            </select>

                                            {this.handle_assigned(job.assigned)}

                                        </div>
                                        <div className="col">

                                            <select className="form-select" onChange={event => this.setState({role: event.target.value})}>
                                                <option value={ job.role }>{ job.role }</option>
                                                <option value="Front End">Front End</option>
                                                <option value="Back End">Back End</option>
                                                <option value="Tester">Tester</option>
                                                <option value="Operations">Operation</option>
                                                <option value="Creative">Creative</option>
                                                <option value="UX">User Experience</option>
                                                <option value="Management">Management</option>
                                                <option value="Other">Other</option>
                                            </select>

                                            { this.handle_sprint(job.sprint) }


                                        </div>
                                        <div className="col">

                                            <select className="form-select" onChange={event => this.setState({stat: event.target.value})}>
                                                <option value={ job.stat }>{ job.stat }</option>
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
                                                defaultValue={job.linked}
                                                type="text"
                                                onChange={event => this.setState({linked: event.target.value})}
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={ () => this.editJob() }>
                                            Edit User
                                        </button>
                                    </div>

                                </div>
                            </div>

                        )
                    })
                }
            </div>

        )
    }

    editJob() {
        this.props.editJob(
            this.state.jobNo,
            this.state.title,
            this.state.jobType,
            this.state.assigned,
            this.state.role,
            this.state.sprint,
            this.state.stat,
            this.state.description,
            this.state.linked
        );

    }

    handle_assigned(currentAssigned) {
        const  { jobs } = this.props;

        return (
            <select className="form-select" onChange={event => this.setState({assigned: event.target.value}) || currentAssigned}>
                <option value={currentAssigned}>{currentAssigned}</option>
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

    handle_sprint(currentSprint) {
        const  { jobs } = this.props;
        return (
            <select className="form-select" onChange={event => this.setState({sprint: event.target.value})}>
                <option value={currentSprint}>{currentSprint}</option>


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


    render() {
        return(
            <div className="container">
                <Header />
                <Nav />
                <div className="UsersTable">
                    <div className="title">
                        View Item
                    </div>
                    <div className="container">
                        <div className="form-group">

                            { this.getView() }

                        </div>
                    </div>

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

export default connect(mapStateToProps, { editJob })(ViewJobs);

