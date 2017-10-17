import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './global/Header';
import Footer from './global/Footer';
import SearchTable from 'reactable-search';

import Nav from './Nav';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    getRows() {
        const  { jobs }  = this.props;
        return jobs.addJob
    }

    render() {
        const rows = this.getRows();

        return(
            <div className="container">
                <Header />
                <Nav />
                <SearchTable searchPrompt="Type to search" rows={rows}/>
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

export default connect(mapStateToProps, { })(Search);



