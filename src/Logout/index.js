import React, { Component } from 'react';
import { Form, Label, Button } from 'semantic-ui-react'

class Logout extends Component {
	
	handleSubmit = async (e) => {
		e.preventDefault()

		const logoutResponse = await fetch('http://localhost:5000/auth', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedResponse = await logoutResponse.json()
		if(parsedResponse.data = 'logout successful'){
			console.log('successful')
			console.log(this.state)
			this.props.history.push('/login')
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
    render(){
        return(
        	<Form onSubmit={this.handleSubmit}>
          	<Button type="submit" color="blue">Logout</Button>
   				</Form>
        )
    }
}
export default Logout;
		            	
		            	
		            	
		            	
