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
<<<<<<< HEAD
          			<Form.Input className="search"onChange={this.handleChange} type="text" value={this.state.search} name='search' placeholder="Fetch The GIFs"/>
          			<div><Button className="searchmeme" type="submit">Search</Button></div>
=======
					<h1>Search for Dank Meme Generators and Impress Your Friends!!</h1>
          			<Form.Input onChange={this.handleChange} type="text" value={this.state.search} name='search' placeholder="e.g. 'spongegar',  'doge',  'skeptical 3rd world kid'"/>
          			<Button type="submit">Search</Button>
>>>>>>> 04a03fe54536a6f63ec1c1a641e26e5dcf9b2dea
      			</Form>
			</div>

		)
	}
}








export default Search;