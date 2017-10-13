import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import BurnDown from './graphs/Burndown';

class Tracking extends Component {
    
    render() {

        return(
            <div className="container">
                <Nav />
                <h1>Tracking</h1>
                <h2>Burn down</h2>
                <p>NOTE:Currently using stubbed data but intent to move this to dynamic</p>

                <BurnDown />

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