import React, {Component} from 'react';
import MemeList from '../MemeList';

import Login from '../Login'

import Search from '../Search'

const apiKey = process.env.API_KEY;


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
			const images = await fetch(process.env.EXPRESS_URL + 'api/v1/images/' + userSearch, {
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