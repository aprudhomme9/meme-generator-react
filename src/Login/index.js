import React, { Component } from 'react';
import { Form, Label, Button, Input, Grid, Segment } from 'semantic-ui-react'

class Login extends Component {
	constructor(){
	    super();
	    this.state = {
	        username: '',
	        password: ''
	    }
	}
	handleSubmit = async (e) => {
		e.preventDefault()

		const loginResponse = await fetch('http://localhost:5000/auth', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedResponse = await loginResponse.json()
		if(parsedResponse.data = 'login successful'){
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
	            	<Form onSubmit={this.handleSubmit}>
		            	<Label>Username</Label>
		            	<Form.Input type="text" name="username" onChange={this.handleChange}/>
		            	<Label>Password</Label>
		            	<Form.Input type="password" name="password" onChange={this.handleChange}/>
		            	<Button type="submit" color="blue">Login</Button>
	            	</Form>
	            </Segment>
            </Grid.Column>
           </Grid>
        )
    }
}
export default Login;
