import React, {Component} from 'react';

import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

const apiKey = '53ab19f9-5502-408b-b645-284c4394a5a9';

class CreateModal extends Component{
	constructor(){
		super();

		this.state = {
			topText: '',
			bottomText: '',
			imageId: '',
			generatorId: '',
			user: ''
		}
	}
	closeModal = () => {
		this.props.closeModal();
	}
	handleChange = (e) => {
		// Sets the top text and bottom text based on user input --> then flows into API call to generate meme
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		// Close modal after submission
		this.props.closeModal();
		// Setting state with imageId and generator Id from props --> used when fetching created meme
		try {
			await this.setState({
				imageId: this.props.imageId,
				generatorId: this.props.generatorId
			})
			// This creates the meme with the user's text input and image properties of selected (clicked) image
			const meme = await fetch('http://version1.api.memegenerator.net//Instance_Create?languageCode=en&generatorID='+ this.state.generatorId + '&imageID='+ this.state.imageId + '&text0='+this.state.topText + '&text1=' + this.state.bottomText + '&apiKey=' + apiKey);

			const parsedMeme = await meme.json();

			
		} catch (err) {
			return err
		}
	
	}
	getUser = async () => {
		try {
			const user = await fetch('http://localhost:5000/api/v1/user');

			// console.log(parsedUser, '<--parsed user');
			const parsedUser = user.json();
			JSON.stringify(parsedUser)
			return parsedUser
		} catch (err) {
			// res.send(err)
		}
	}
	componentDidMount(){
		this.getUser().then((user) => {
			this.setState({
				user: user
			})
		})
	}
	render(){
		console.log(this.state.user, '<--USER IN STATE');
		return(
			<Modal open={this.props.open}>
				<Header>Make it dank</Header>
				<Modal.Content>
					<p className="close" onClick={this.closeModal}>+</p>
					<img height='400' width='400' src={this.props.image}/><br/>
					<Form onSubmit={this.handleSubmit}>
						<Label>
						Top Text
						</Label>
						<Form.Input onChange={this.handleChange} type='text' name='topText' value={this.state.topText}/>
						<Label>
						Bottom Text
						</Label>
						<Form.Input onChange={this.handleChange} type='text' name='bottomText' value={this.state.bottomText}/>
						<Button type='submit' color='blue'>Submit</Button>
					</Form>
					
				</Modal.Content>
			</Modal>
		)
	}
}

export default CreateModal;