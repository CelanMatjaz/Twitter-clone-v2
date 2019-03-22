import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Tweet from './Tweet';

class FeedProfile extends Component {
	state = {
		tweets: [],
		error: ''
	}

	componentDidMount(){
		this.fetchTweets();
    }

    fetchTweets = () => {
		const { username } = this.props.match.params;
        fetch(`/tweets/${username}`)
			.then(res => res.json())
			.then(tweets => {
				this.setState({tweets});
			})
			.catch(error => {
				console.error(error);
				this.setState({error: 'Could not get tweets'});
			});
    }
    
    handleEdit = id => {
        this.props.history.push(`/edit-tweet/${id}`);
    }

    handleDelete = id => {
        console.log(`/tweet/${id}`);
        const token = 'Bearer ' + localStorage.getItem('token');

        fetch(`/tweet/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.msg === 'Tweet was deleted'){
                    this.fetchTweets();
                }
                else{
                    this.setState({error: 'Could not delete tweet'});
                }
            })
            .catch(err => {
                this.setState({error: 'Could not delete tweet'});
            });
    }

	render(){
		const { error } = this.state;
		const tweets = this.state.tweets.map(tweet => 
            <Tweet 
                key={tweet._id} 
                data={tweet} 
                profileView={this.props.username === tweet.username} 
                edit={this.handleEdit} 
                delete={this.handleDelete}
            />
        );

		return (
			<div className="feed">
				{error ? error : tweets}
			</div>
		);
	}
};

const mapStateToProps = state => ({
	username: state.auth.userInfo.username
});	

export default connect(mapStateToProps)(FeedProfile);