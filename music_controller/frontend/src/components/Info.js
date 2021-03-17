import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, IconButton, Icon } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';

const pages = {
	JOIN: 'pages.join',
	CREATE: 'pages.create',
}

export default function Info(props) {
	const [page, setPage] = useState(pages.JOIN);

	function joinInfo() {
		return (
			<div>
				<h1>Join Page</h1>
				<p>
					The join page is the page you will use to enter another's person room. Once
					you are there you just need to put the code of your friend's room and click
					the button "ENTER ROOM" and you will be redirect to the room page.
				</p>
			</div>
		);
	}

	function createInfo() {
		return (
			<div>
				<h1>Create Page</h1>
				<p>
					The create page is the page you will use if you want to create your own room.
					Once you are there you need to choose if your guests will be able to pause and
					play the songs or not. After that you just need to select the number of votes
					required to skip a song (each person can vote once per song) and then click
					on the "CREATE A ROOM" button.
				</p>
			</div>
		);
	}

	useEffect(() => {
		console.log('bitch');
		return () => console.log('cleanup');
	}, []);

	return (
		<Grid container spacing={1}>
			<Grid item xs={12} align='center'>
				<Typography variant='body1'>
					{ page === pages.JOIN ? joinInfo() : createInfo()}
				</Typography>
			</Grid>
			<Grid item xs={12} align='center'>
				<IconButton onClick={() => {page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE)}}>
					{page === pages.CREATE ? <NavigateBeforeIcon/> : <NavigateNextIcon/>}
				</IconButton>
			</Grid>

			<Grid item xs={12} align='center'>
				<Button color='secondary' variant='contained' to='/' component={Link}>
					Back
				</Button>
			</Grid>
		</Grid>
	)
}
