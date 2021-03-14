import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, IconButton } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';

export default function Info(props) {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Typography component='h4' variant='h4'>
					What is House Party?
				</Typography>
				<p>not done, come back later</p>
			</Grid>
			<Grid item xs={12}>
				<Button color='secondary' variant='contained' to='/' component={Link}>
					Back
				</Button>
			</Grid>
		</Grid>
	)
}
