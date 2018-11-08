import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react'

class Search extends Component {
	constructor(){
		super();

		this.state = {
			search: ''
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.getResults(this.state.search);
	}
	render(){
		console.log(this.state.search);
		return(

			<div>
				<Form onSubmit={this.handleSubmit}>
					<h1>Search for Dank Meme Generators and Impress Your Friends!!</h1>
          			<Form.Input onChange={this.handleChange} type="text" value={this.state.search} name='search' placeholder="e.g. 'spongegar',  'doge',  'skeptical 3rd world kid'"/>
          			<Button type="submit">Search</Button>
      			</Form>
			</div>

		)
	}
}








export default Search;