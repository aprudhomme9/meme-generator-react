import React, {Component} from 'react';

import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

class CreateModal extends Component{
	constructor(){
		super()
	}
	closeModal = () => {
		this.props.closeModal()
	}
	render(){
		console.log(this.props.image);
		return(
			<Modal open={this.props.open}>
				<Header>Make it dank</Header>
				<Modal.Content>
					<img src={this.props.image}/>
					<p>{this.props.image}</p>
					<Button onClick={this.closeModal}>Close</Button>
				</Modal.Content>
			</Modal>


			)
	}
}

export default CreateModal;