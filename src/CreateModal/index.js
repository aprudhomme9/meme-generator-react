import React, {Component} from 'react';

import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

const apiKey = '53ab19f9-5502-408b-b645-284c4394a5a9';

class CreateModal extends Component{
	constructor(){
		super()

		this.state = {
			topText: '',
			bottomText: '',
			imageId: '',
			generatorId: ''
		}
	}
	closeModal = () => {
		this.props.closeModal()
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
		console.log(this.state.topText, this.state.bottomText);
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		this.props.closeModal();
		try {
			await this.setState({
				imageId: this.props.imageId,
				generatorId: this.props.generatorId
			})
			const meme = await fetch('http://version1.api.memegenerator.net//Instance_Create?languageCode=en&generatorID='+ this.state.generatorId + '&imageID='+ this.state.imageId + '&text0='+this.state.topText + '&text1=' + this.state.bottomText + '&apiKey=' + apiKey);
			const parsedMeme = await meme.json();

			console.log(parsedMeme);

			
		} catch (err) {
			// res.send(err)
		}
	
	}
	render(){
		console.log(this.state.generatorId, 'GENERATOR ID');
		console.log(this.state.imageId, 'IMAGE ID');
		return(
			<Modal open={this.props.open}>
				<Header>Make it dank</Header>
				<Modal.Content>
					<p class="close" onClick={this.closeModal}>+</p>
					<img height='400' width='400' src={this.props.image}/><br/>
					<Form onSubmit={this.handleSubmit}>
						<Label>
						Top Text
						</Label>
						<Form.Input onChange={this.handleChange} type='text' name='topText' value={this.state.topText}/>
						<Label>
						Bottm Text
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