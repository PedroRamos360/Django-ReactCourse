import React, { Component } from 'react';
import { Grid, Typography, Card, IconButton, LinearProgress } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';


export default class MusicPlayer extends Component {
	constructor(props) {
		super(props);
	}

	pauseSong() {
		const requestOptions = {
			method: 'PUT',
			headers: {'Content-Type': 'applications/json'}
		};
		fetch('/spotify/pause', requestOptions);
	}

	playSong() {
		const requestOptions = {
			method: 'PUT',
			headers: {'Content-Type': 'applications/json'}
		};
		fetch('/spotify/play', requestOptions);
	}

	render() {
		const songProgress = (this.props.time / this.props.duration) * 100;

		return (
			<Card>
				<Grid container alignItems='center'>
					<Grid item align='center' xs={4}>
						<img src={this.props.image_url ?? 'https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80'} height='100%' width='100%' alt='Song Cover' />
					</Grid>
					<Grid item align='center' xs={8}>
						<Typography component='h5' variant='h5'>
							{ this.props.title ?? "No song playing" }
						</Typography>
						<Typography color='textSecondary' variant='subtitle1'>
							{ this.props.artist ?? '' }
						</Typography>
						<div>
							<IconButton onClick={() => {
								this.props.is_playing ? this.pauseSong() : this.playSong()
							}}>
								{ this.props.is_playing ? <PauseIcon /> : <PlayArrowIcon />}
							</IconButton>
							<IconButton>
								<SkipNextIcon />
							</IconButton>
						</div>
					</Grid>
				</Grid>
				<LinearProgress variant='determinate' value={songProgress} />
			</Card>
		);
	}
}