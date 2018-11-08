import React, { Component } from 'react';
import { Form, Label, Button, Input, Grid, Segment } from 'semantic-ui-react'
import Register from '../Register'

class Login extends Component {
	constructor(){
	    super();
	    this.state = {
	        username: '',
	        password: '',
	        isLoggedIn: false
	    }
	}
	handleLogin = async (e) => {
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
		if(parsedResponse.data){
			console.log('successful')
			console.log(this.state)
			this.props.history.push('/home')
		}
	}
	checkLoginStatus = (e) => {
		this.setState({
			isLoggedIn: true
		})
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
    render(){
    	console.log(this.state.isLoggedIn)
        return(
        	<div>
        	<Register />
        	<Grid container columns={1} textAlign='center' vertical='middle' style={{height: '100%'}}>
        		<Grid.Column style={{maxWidth: 450}}>
	        		<Segment>
	        		<h3>Already have an account?</h3>
	        		<h2>Login</h2>
	            	<Form onSubmit={this.handleLogin} onClick={this.checkLoginStatus}>
		            	<Label>Username</Label>
		            	<Form.Input type="text" name="username" onChange={this.handleChange}/>
		            	<Label>Password</Label>
		            	<Form.Input type="password" name="password" onChange={this.handleChange}/>
		            	<Button type="submit" color="blue">Login</Button>
	            	</Form>
	            </Segment>
            </Grid.Column>
           </Grid>
           </div>
        )
    }
}
export default Login;

