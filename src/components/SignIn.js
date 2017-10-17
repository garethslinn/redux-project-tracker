import React, { Component }  from 'react';
import { firebaseApp } from "../firebase";
import Nav from './Nav';
import Header from './global/Header';
import Footer from './global/Footer';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn() {
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            });

        firebaseApp.auth().onAuthStateChanged(user => {
            if(user) {
                window.location = '/';
            }
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Nav />
                <div className="title">Sign In</div>
                <div className="form-inline">
                    <div className="form-group" style={{margin: '5%'}}>
                        <input
                            className="form-control"
                            type="text"
                            style={{marginRight: '5%'}}
                            placeholder="email"
                            onChange={ event => this.setState({ email: event.target.value })}
                        />
                        <input
                            className="form-control"
                            type="password"
                            style={{marginRight: '5%'}}
                            placeholder="password"
                            onChange={ event => this.setState({ password: event.target.value })}
                        />
                        <button
                            className="btn btn-button"
                            type="button"
                            onClick={ () => this.signIn() }
                        >
                            Sign In
                        </button>
                    </div>


                </div>
                <div>{this.state.error.message}</div>
                    <div className="alert alert-info" role="alert">
                    <p>NOTE: you can sign in using guest:</p>
                    <ul>
                        <li>user: guest@test.com</li>
                        <li>pw: password</li>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SignIn;