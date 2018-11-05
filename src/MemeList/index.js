import React, {Component} from 'react';

class MemeList extends Component{
	constructor(){
		super();

		this.state = {
			images: []
		}
	}

	render(){
		const image = this.props.images.map((image) => {
			console.log(image.imageUrl);
			return (
					<img height='400' width='400' src={image.imageUrl} />
					
			)
			// console.log(image);
		})

		return(
			<div>
				{image}
			</div>
			



		)
	}
}



export default MemeList;