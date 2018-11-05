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

		return(
			<Modal open={this.props.open}>
				<Header>Make it dank</Header>
				<Modal.Content>
					<img height='400' width='400' src={this.props.image}/>
					
					<Button onClick={this.closeModal}>Close</Button>
				</Modal.Content>
			</Modal>


			)
	}
}

export default CreateModal;