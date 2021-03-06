import React, {Component} from 'react';
import serverUrl from '../serverUrl'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Logout from '../Logout';

const apiKey = process.env.API_KEY;



class CreateModal extends Component{
	constructor(){
		super();

		this.state = {
			topText: '',
			bottomText: '',
			imageId: '',
			generatorId: '',
			user: '',
			imageUrl: '',
			loggedIn: false
		}
	}
	closeModal = () => {
		this.props.closeModal();
	}
	findUser = async () => {
		const foundUser = await fetch
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
			const meme = await fetch('http://version1.api.memegenerator.net//Instance_Create?languageCode=en&generatorID='+ this.state.generatorId + '&imageID='+ this.state.imageId + '&text0='+this.state.topText + '&text1=' + this.state.bottomText + '&apiKey=53ab19f9-5502-408b-b645-284c4394a5a9');

			const parsedMeme = await meme.json();
			console.log(parsedMeme);
			const addMeme = await fetch(serverUrl + 'api/v1/memes', {
				method: 'POST',
				body: JSON.stringify({
					imgUrl: parsedMeme.result.instanceImageUrl,
					channel: parsedMeme.result.displayName,
					user: this.state.user,
					upvotes: 0,
					downvotes: 0
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			
		} catch (err) {
			return err
		}
	
	}
	getUser = async () => {
		try {
			const user = await fetch(serverUrl + 'api/v1/user', {credentials: 'include'});
			console.log(user);
			
			const parsedUser = user.json();
			
			return parsedUser
		} catch (err) {
			

		}
	}
	componentDidMount(){

		this.getUser().then((user) => {
			if(user !== null) {
				this.setState({
					user: user.data,
					loggedIn: true

				})
			}

		})

	}
	render(){
		console.log(this.state, '<--STATE');
		return(
			<div>
				
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
			</div>
			
		)
	}
}

export default CreateModal;