import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Tweet from './Tweet';

class Feed extends Component {
	state = {
		tweets: [],
		error: ''
	}

	componentDidMount(){
		fetch('/tweets')
			.then(res => res.json())
			.then(tweets => {
				this.setState({tweets});
			})
			.catch(error => {
				console.error(error);
				this.setState({error: 'Could not get tweets'});
			});
	}

	render(){
		const { error } = this.state;
		const tweets = this.state.tweets.map(tweet => <Tweet key={tweet._id} data={tweet}/>);
		return (
			<div className="feed">
				{error  ? error : tweets}
			</div>
		);
	}
};

const mapStateToProps = state => ({
	username: state.auth.userInfo.username
});	

export default connect(mapStateToProps)(Feed);
