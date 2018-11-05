import React, {Component} from 'react';
import CreateModal from '../CreateModal'

class MemeList extends Component{
	constructor(){
		super();

		this.state = {
			imageUrl: '',
			showModal: false
		}
	}
	handleClick = (e) => {
		this.setState({
			imageUrl: e.currentTarget.imageUrl,
			showModal: true
		})
		console.log(e.currentTarget.name);
		console.log(this.state.showModal);
	}
	closeModal = () => {
		this.setState({
			showModal: false
		})
	}
	render(){
		const generatorList = this.props.images.map((image, i) => {
			// console.log(image.imageUrl);g
			return (
					<img name={image.urlName} onClick={this.handleClick} key={i} height='400' width='400' src={image.imageUrl} />
					
			)
		})

		return(
			<div>
				<CreateModal closeModal={this.closeModal} image={this.state.imageUrl} open={this.state.showModal} />
				<ul>
					{generatorList}	
				</ul>
			</div>
			



		)
	}
}



export default MemeList;