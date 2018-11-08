import React, {Component} from 'react';
import UserList from '../UserList'
import UserProfile from '../UserProfile'
import {Button} from 'semantic-ui-react'
import serverUrl from '../serverUrl.js'
class UserContainer extends Component{
	constructor(){
		super()

		this.state = {
			showProfile: false,
			user: ''
		}
	}
	handleClick = async (id) => {
		const userIndex = id
		const foundUser = await fetch(serverUrl + 'api/v1/user/' + userIndex);
		const parsedUser = await foundUser.json()
		
		this.setState({
			showProfile: true,
			user: parsedUser.data
		})
		
	}
	hideProfile = () => {
		this.setState({
			showProfile: false
		})
	}
	render(){
		console.log(this.state.user);
		return(
			<div>
				<Button color='blue'onClick={this.hideProfile}>Meme Community Home</Button>
				{this.state.showProfile ? <UserProfile user={this.state.user} /> : <UserList handleClick={this.handleClick}/>}
			</div>
			)
	}
}

export default UserContainer