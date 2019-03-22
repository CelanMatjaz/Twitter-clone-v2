import React, { Component } from 'react';
import Routes from '../Routes';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import Navbar from './layout/Navbar';

//Actions
import { LoginCheck } from '../store/actions/actions/actions.auth';

class App extends Component {  
    
    componentDidMount(){
        this.props.LoginCheck();
    }
    
    render() {
        if(this.props.loginCheck) return (
            <div style={{width: '100%', textAlign: 'center'}}>
                <img style={{margin: '50px auto'}} src="/spinner.svg" alt="" />
            </div>
        )
        return (
            <>
                <Navbar/>
                <main className="container">
                    <Routes/> 
                </main>
            </>
        );
    }
}

const mapStateToProps = state => ({
    loginCheck: state.auth.loginCheck
});

export default withRouter(connect(mapStateToProps, { LoginCheck })(App));