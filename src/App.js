import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeaderBoardContainer from './LeaderBoardContainer';
import MemeContainer from './MemeContainer';
import ChannelContainer from './ChannelContainer'
import ProfileContainer from './ProfileContainer'
import HeaderApp from './Header';
import Login from './Login';
import Logout from './Logout'
import Register from './Register'
import UserContainer from './UserContainer'
import serverUrl from './serverUrl'

import {Route, Switch} from 'react-router-dom'

// const mgUserName = 'aprudhomme';
// const mgPassword = 'Jaglax19';
const apiKey = process.env.API_KEY;;
const Our404 = () => {
  return (
    <div>NO MEMES FOR YOU</div>
    )
}


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
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={MemeContainer}/>
          <Route exact path="/leaderboard" component={LeaderBoardContainer}/>
          <Route exact path="/profile" component={ProfileContainer}/>
          <Route exact path='/users' component={UserContainer}/>
          <Route component={Our404}/>

        </Switch>
      </div>
    );
  }
}
        

export default App;

