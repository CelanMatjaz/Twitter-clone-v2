import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import TweetP from './TweetP';

class AddTweet extends Component {
    state = {
        title: '',
        body: '',
        error: ''
    }

    handleChange = e => {
        const { title, body } = this.state;
        if(title.length < 31 && body.length < 256)
            this.setState({
                [e.target.id]: e.target.value
            });
    }

    handleSubmit = e => {
        e.preventDefault();
        const token = 'Bearer ' + localStorage.getItem('token');
        fetch('/tweet', {
            method: 'POST',
            body: JSON.stringify({title: this.state.title, body: this.state.body}),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.msg === 'Tweet was added'){
                    this.props.history.push(`/profile/${this.props.username}`);
                }
                else{
                    this.setState({error: 'Could not post tweet'});
                }
            })
            .catch(err => {
                this.setState({error: 'Could not post tweet'});
            });
    }

    render() {
        if(this.props.isEmpty) this.props.history.push('/');
        return (
            <TweetP data={{...this.state, btnText: 'Post'}} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.userInfo.username,
    isEmpty: state.auth.isEmpty
});

export default withRouter(connect(mapStateToProps)(AddTweet));