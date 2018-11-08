import React, {Component} from 'react';
import CreateModal from '../CreateModal'
const apiKey = process.env.API_KEY;
class MemeList extends Component{
	constructor(){
		super();

		this.state = {
			imageUrl: '',
			showModal: false,
			imageId: '',
			generatorId: ''
		}
	}
	handleClick = (e) => {
		this.setState({
			imageUrl: e.currentTarget.src,
			showModal: true,
			imageId: e.currentTarget.name,
			generatorId: e.currentTarget.id
		})

	}
	closeModal = () => {
		this.setState({
			showModal: false
		})
	}
	render(){
		console.log(this.props.images);
		const generatorList = this.props.images.map((image, i) => {
			return (
					<img id={image.generatorID} name={image.imageID} onClick={this.handleClick} key={i} height='400' width='400' src={image.imageUrl} />		
			)
		})

		return(
			<div>
				<CreateModal imageId={this.state.imageId} generatorId={this.state.generatorId} handleSubmit={this.handleSubmit} closeModal={this.closeModal} image={this.state.imageUrl} open={this.state.showModal} />
				<ul>
					{generatorList}	
				</ul>
			</div>
		)
	}
}



export default MemeList;