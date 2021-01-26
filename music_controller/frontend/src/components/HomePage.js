import React, {Component} from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class HomePage extends Component {
    constructor(props) {
        super(props); // chama o construtor de component
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component><p>This is the home page</p></Route>
                    <Route path="/join" component={RoomJoinPage}/>
                    <Route path="/create" component={CreateRoomPage}/>
                </Switch>
            </Router>
        )
    }
}