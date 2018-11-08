import React, {Component} from 'react';
import { Form, Label, Button, Input, Grid, Segment } from 'semantic-ui-react'
import serverUrl from '../serverUrl'
class UserList extends Component{
	constructor(){
		super()

		this.state = {
			users: []
		}
	}
	fetchUsers = async () => {
		try {
			const foundUsers = await fetch(serverUrl + 'api/v1/user/all')
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
			return <div><Segment className="userlist"cursor="pointer" color="olive"onClick={this.handleClick} id={user._id} key={i}>{user.username}</Segment></div>
		})
		return(
			<div>
				<Grid textAlign='center' vertical='middle' style={{height: '100%'}}>
        		<Grid.Column style={{maxWidth: 450}}>
	        		<Segment>
								{users}
							</Segment>
	    		</Grid.Column>
	    	</Grid>	
			</div>
			)
	}
}

export default UserList