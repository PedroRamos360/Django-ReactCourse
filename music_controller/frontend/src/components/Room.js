import React, { Component } from 'react';

export default class Room extends Component {
	constructor(props) {
		super(props);
		this.state = {
			votesToSkip: 2,
			guestCanPause: false,
			isHost: false
		}
		this.roomCode = this.props.match.params.roomCode;
		this.getRoomDetails();
	}

	getRoomDetails() {
		console.log(this.roomCode)
		fetch('/api/get-room' + '?code=' + this.roomCode).then(response => response.json()).then(data => {
			this.setState({
				votesToSkip: data.votes_to_skip,
				guestCanPause: data.guest_can_pause,
				isHost: data.isHost
			})
		});
	}

	render() {
		return (
			<div>
				<h3>{this.roomCode}</h3>
				<p>Votes: {this.state.votesToSkip}</p>
				<p>Guest can pause?: {`${this.state.guestCanPause}`}</p>
				<p>Is user host?: {`${this.state.isHost}`}</p>
			</div>
		)
	}
}