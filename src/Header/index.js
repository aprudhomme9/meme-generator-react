import React, {Component} from 'react';

import {Button, Grid, Label, Header, Input, Icon} from 'semantic-ui-react';

import { Link } from 'react-router-dom'

import Logout from '../Logout'

import Login from '../Login'

import serverUrl from '../serverUrl.js'


class HeaderApp extends Component{
	constructor(){
		super()

		this.state = {
			loggedIn: false
		}
	}
	componentDidMount(){

	}
	findUser = async () => {
		try {
			const user = await fetch(serverUrl + 'api/v1/user', {credentials: 'include'});
			
			
			const parsedUser = user.json();
			
			return parsedUser
		} catch (err) {
			

		}
	}
	render(){
		this.findUser().then((user) => {
			// console.log('hey');
			if(user.data !== null) {
				this.setState({
					loggedIn: true
				})
			} else {
				this.setState({
					loggedIn: false
				})
			}
		});
		return(
			<Header>
				<h1>MemeStream</h1>
				<nav>
					<Grid columns={1} divided textAlign='left' style={{ height: '100%' }} verticalAlign='top' stackable>
						<Grid.Column>
          					{this.state.loggedIn ? <Logout /> : <Link to='/login'>Login/Register</Link> }<br/>
          					<Link to='/home'>Home</Link><br/>
							<Link to='/profile'>Profile</Link><br/>
							<Link to='/leaderboard'>LeaderBoard</Link><br/>
							<Link to='/users'>Meme Community</Link><br/>
      					</Grid.Column>	
      				</Grid>

					</nav>
			</Header>
		)
	}
}
export default HeaderApp;
        	
      	





