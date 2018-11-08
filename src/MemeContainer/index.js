import React, {Component} from 'react';
import MemeList from '../MemeList';
import Search from '../Search'

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
	fetchImages = async (search) => {
		const userSearch = search;
		console.log(userSearch, '<----user search');
		try {
			const images = await fetch('http://localhost:5000/api/v1/images/' + userSearch, {
				credentials: 'include'
			});
			console.log(parsedImages, '<---parsedImages');
			const parsedImages = await images.json();

			return parsedImages
		} catch (err) {
			return err
		}
	}
	getResults = (query) => {
		console.log(query, '<--Query');
		const userQuery = query;
		this.fetchImages(userQuery).then((images) => {
			this.setState({
				images: images.data
			})
		})
	}
	render(){	
		console.log(this.state.images, '<---images');
		return(
			<div>
				<Search getResults={this.getResults} />
				<MemeList images={this.state.images} />

			</div>
 
		)
	}
}


export default MemeContainer;