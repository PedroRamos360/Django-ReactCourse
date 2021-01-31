import React, { Component } from 'react';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false
        }
        this.code = this.props.match.params.code;
        this.getRoomDetails();
    }

    getRoomDetails() {
        fetch('/api/get-room' + '?code=' + this.code).then(response => response.json()).then(data => {
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
                <h3>{this.code}</h3>
                <p>Votes: {this.state.votesToSkip}</p>
                <p>Guest can pause?: {this.state.guestCanPause.toString()}</p>
                <p>Is user host?: {`${this.state.isHost}`}</p>
            </div>
        )
    }
}