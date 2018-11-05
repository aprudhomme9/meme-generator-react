import React, {Component} from 'react';

class MemeList extends Component{
	constructor(){
		super();

		this.state = {
			images: []
		}
	}
	handleClick = (e) => {
		console.log(e.currentTarget.name);
	}
	render(){
		const generatorList = this.props.images.map((image, i) => {
			// console.log(image.imageUrl);g
			return (
					<img name={image.displayName} onClick={this.handleClick} key={i} height='400' width='400' src={image.imageUrl} />
					
			)
		})

		return(
			<div>
				<ul>
					{generatorList}	
				</ul>
			</div>
			



		)
	}
}



export default MemeList;