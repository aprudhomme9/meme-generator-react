import React, { Component } from 'react';
import { Form, Label, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Logout extends Component {
		constructor(props){
	    super(props);
	    this.state = {
	        username: '',
	        password: ''
	    }
	}
	handleSubmit = async (e) => {
		e.preventDefault()

		const logoutResponse = await fetch('http://localhost:5000/auth/logout', {
			method: 'GET',
			credentials: 'include',
			// body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		console.log(this.context, 'CONTEXT~~~Å')
		const parsedResponse = await logoutResponse.json()
		console.log("Here",parsedResponse)
		if(parsedResponse.data = 'logout successful'){
			console.log('successful')
			console.log(this.state)
			this.props.history.push('/login')
		}
		else {
			console.log("here")
		}
	}
    render(){
    	console.log(this.props, 'THIS DOT PROPS!!!!!!!!!!!')
        return(
        	<Form onSubmit={this.handleSubmit}>
          	<Button type="submit" color="blue">Logout</Button>
   				</Form>
        )
    }
}
export default withRouter(Logout);
		            	
		            	
		            	
		            	
