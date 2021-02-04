import React, { Component } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

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
		this.leaveButtonPressed = this.leaveButtonPressed.bind(this);
	}

	getRoomDetails() {
		console.log(this.roomCode)
		fetch('/api/get-room' + '?code=' + this.roomCode).then(response => response.json()).then(data => {
			this.setState({
				votesToSkip: data.votes_to_skip,
				guestCanPause: data.guest_can_pause,
				isHost: data.is_host
			})
		});
	}

	leaveButtonPressed() {
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'}
		}

		fetch('/api/leave-room', requestOptions).then(_response => {
			this.props.history.push('/');
		});
	}

	render() {
		return (
			<Grid container spacing={1}>
				<Grid item xs={12} align='center'>
					<Typography variant='h4' component='h4'>
						Code: {this.roomCode}
					</Typography>
				</Grid>
				<Grid item xs={12} align='center'>
					<Typography variant='h6' component='h6'>
						Votes: {this.state.votesToSkip}
					</Typography>
				</Grid>
				<Grid item xs={12} align='center'>
					<Typography variant='h6' component='h6'>
						Guest can pause?: {`${this.state.guestCanPause}`}
					</Typography>
				</Grid>
				<Grid item xs={12} align='center'>
					<Typography variant='h6' component='h6'>
						Is user host?: {`${this.state.isHost}`}
					</Typography>
				</Grid>
				<Grid item xs={12} align='center'>
					<Button variant='contained' color='secondary' onClick={this.leaveButtonPressed}>
						Leave room
					</Button>
				</Grid>
			</Grid>
		)
	}
}
// <div>
// <h3>{this.roomCode}</h3>
// <p>Votes: {this.state.votesToSkip}</p>
// <p>Guest can pause?: {`${this.state.guestCanPause}`}</p>
// <p>Is user host?: {`${this.state.isHost}`}</p>
// </div>