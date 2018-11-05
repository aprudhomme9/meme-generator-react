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
					<img height='400' width='400' src={this.props.image}/><br/>
					<Label>
						Top Text
					</Label>
					<Form.Input type='text' name='top-text'/>
					<Label>
						Bottm Text
					</Label>
					<Form.Input type='text' name='bottom-text'/>
					<Button color='blue' onClick={this.closeModal}>Submit</Button>
				</Modal.Content>
			</Modal>


			)
	}
}

export default CreateModal;