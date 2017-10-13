import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import BurnDown from './graphs/Burndown';
import Header from './global/Header';
import Footer from './global/Footer';

class Tracking extends Component {
    
    render() {

        return(
            <div className="container">
                <Header />
                <Nav />

                <BurnDown />
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

export default connect(mapStateToProps, {  })(Tracking);