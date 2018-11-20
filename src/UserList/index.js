import React, {Component} from 'react';

import {Button, Grid, Segment} from 'semantic-ui-react';

import serverUrl from '../serverUrl.js'


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
<<<<<<< HEAD
        const users = this.state.users.map((user, i) => {
            return <div><Segment className="userlist" onClick={this.handleClick} id={user._id} key={i}>{user.username}</Segment></div>
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
=======
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
>>>>>>> 5e1d39c8f5080d89fb4935b417c9f99bc7c42dfb
}

export default UserList