import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class UserList extends Component{
	constructor(){
		super()

		this.state = {
			users: []
		}
	}
	fetchUsers = async () => {
		try {
			const foundUsers = await fetch('http://localhost:5000/api/v1/user/all')
			const parsedUsers = await foundUsers.json();

			return parsedUsers
		} catch (err) {
			
		}
	}
	handleClick = (e) => {
		const profile = e.currentTarget.id;
		this.props.handleClick(profile)
	}
	componentDidMount(){
		this.fetchUsers().then((users) => {
			console.log(users);
			this.setState({
				users: users.data
			})
		})
	}
	render(){
		const users = this.state.users.map((user, i) => {
			return <Button onClick={this.handleClick} id={user._id} key={i}>{user.username}</Button>
		})
		return(
			<div>
				{users}
			</div>
			)
	}
}

export default UserList