import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import TweetP from './TweetP';

class EditTweet extends Component {
    state = {
        title: '',
        body: ''
    }

    componentDidMount(){
        const token = 'Bearer ' + localStorage.getItem('token');
        fetch(`/tweet/${this.props.match.params.id}`, {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(tweet => {
                if(tweet){
                    this.setState({
                        title: tweet.title,
                        body: tweet.body
                    });
                }
                else{
                    this.props.history.push('/');
                }
            })
            .catch();
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const token = 'Bearer ' + localStorage.getItem('token');
        fetch(`/tweet/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify({title: this.state.title, body: this.state.body}),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.msg === 'Tweet was updated'){
                    this.props.history.push(`/profile/${this.props.username}`);
                }
                else{
                    this.setState({error: 'Could not edit tweet'});
                }
            })
            .catch(err => {
                this.setState({error: 'Could not edit tweet'});
            });
    }

    render() {
        return (
            <TweetP data={{...this.state, btnText: 'Edit'}} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.userInfo.username
});

export default connect(mapStateToProps)(EditTweet);