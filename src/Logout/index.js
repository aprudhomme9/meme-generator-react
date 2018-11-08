import React, { Component } from 'react';
import { Form, Label, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import serverUrl from '../serverUrl.js'

class Logout extends Component {
		constructor(props){
	    super(props);
	    this.state = {
	        username: '',
	        password: ''
	    }
	}
	handleLogout = async (e) => {
		e.preventDefault()

		const logoutResponse = await fetch(serverUrl + 'auth/logout', {
			method: 'GET',
			credentials: 'include',
			// body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedResponse = await logoutResponse.json()

		if(parsedResponse.data = 'logout successful'){

			this.props.history.push('/login')
		}
		else {
			console.log("here")
		}
	}
    render(){

        return(
        	<Form onSubmit={this.handleLogout}>
          	<Button type="submit" color="red">Logout</Button>
   				</Form>
        )
    }
}
export default withRouter(Logout);
		            	
		            	
		            	
		            	
