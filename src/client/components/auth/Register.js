import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import RegisterP from './RegisterP';

export class Register extends Component {
    state = {
        username: '',
        password: '',
        passwordRepeat: '',
        email: '',
        registerErrors: [],
        message: null
    }   

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();     
        const { username, email, password, passwordRepeat } = this.state;
        this.setState({
            message: null,
            registerErrors: []
        });
        fetch('/register', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password,
                passwordRepeat
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.status === 'Register_success'){
                    this.setState({
                        message: 'Account successfuly created',
                        registerErrors: [],
                        username: '',
                        password: '',
                        passwordRepeat: '',
                        email: '',
                    });
                }
                else{
                    this.setState({
                        registerErrors: data.errors || ['Error registering user'],
                        message: null
                    });
                }
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    registerErrors: ['Error registering user']
                });
            });
    }

    render() {
        if(!this.props.auth.isEmpty) return <Redirect to="/"/>;		
        return (
            <RegisterP data={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { /*register*/ })(Register);
