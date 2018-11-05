import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeaderBoardContainer from './LeaderBoardContainer';
import MemeContainer from './MemeContainer';
import ChannelContainer from './ChannelContainer'
import ProfileContainer from './ProfileContainer'
import HeaderApp from './Header';

import {Route, Switch} from 'react-router-dom'

const mgUserName = 'aprudhomme';
const mgPassword = 'Jaglax19';
const apiKey = '53ab19f9-5502-408b-b645-284c4394a5a9';
class App extends Component {
	constructor(){
		super()

		this.state = {
			memes: []
		}
	}
  render() {
    return (
      <div className="App">
        <HeaderApp />
        <Switch>
          <Route exact path="/" component={MemeContainer}/>
          <Route exact path="/leaderboard" component={LeaderBoardContainer}/>
          <Route exact path="/channels" component={ChannelContainer}/>
          <Route exact path="/profile" component={ProfileContainer}/>
        </Switch>
      </div>
    );
  }
}
        

export default App;

