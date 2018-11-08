import React, { Component } from 'react';
import { Form, Label, Button, Input, Grid, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

import serverUrl from '../serverUrl.js'


class Register extends Component {
	constructor(){
	    super();
	    this.state = {
	        username: '',
	        password: ''
	    }
	}
	handleRegister = async (e) => {
		e.preventDefault()

		const registerResponse = await fetch(serverUrl + 'auth/register', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
			
		})
		const parsedResponse = await registerResponse.json()
		if(parsedResponse.data){
			console.log('successful')
			console.log(this.state)
			this.props.history.push('/home')
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
    render(){
        return(
        	<Grid container columns={1} textAlign='center' vertical='middle' style={{height: '100%'}}>
        		<Grid.Column style={{maxWidth: 450}}>
	        		<Segment>
	        		<h2>Register</h2>
	            	<Form onSubmit={this.handleRegister}>
		            	<Label>Username</Label>
		            	<Form.Input type="text" name="username" onChange={this.handleChange}/>
		            	<Label>Password</Label>
		            	<Form.Input type="password" name="password" onChange={this.handleChange}/>
		            	<Button type="submit" color="green">Register</Button>
	            	</Form>
	            </Segment>
            </Grid.Column>
           </Grid>
        )
    }
}
export default withRouter(Register);

