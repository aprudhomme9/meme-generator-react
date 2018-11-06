import React, {Component} from 'react';
import MemeList from '../MemeList';


// const mgUserName = 'aprudhomme';
// const mgPassword = 'Jaglax19';
const apiKey = '53ab19f9-5502-408b-b645-284c4394a5a9';


class MemeContainer extends Component {
	constructor(){
		super()

		this.state = {
			images: []
		}
	}
	fetchImages = async () => {
		try {
			const images = await fetch('http://localhost:5000/api/v1/images');

			const parsedImages = await images.json();

			return parsedImages
		} catch (err) {
			// res.send(err)
		}
	}
	componentDidMount(){
		this.fetchImages().then((images) => {
			this.setState({
				images: images.data
			})
		})
	}
	render(){	
		return(
			<div>
				<h1>DANK</h1>
				<MemeList images={this.state.images} />

			</div>
 
		)
	}
}


export default MemeContainer;