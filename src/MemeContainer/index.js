import React, {Component} from 'react';

import MemeList from '../MemeList';

import Login from '../Login'

import Search from '../Search'

import serverUrl from '../serverUrl.js'

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

		try {
			const images = await fetch(serverUrl + 'api/v1/images/' + userSearch, {
				credentials: 'include'
			});

			const parsedImages = await images.json();

			return parsedImages
		} catch (err) {
			return err
		}
	}
	getResults = (query) => {

		const userQuery = query;
		this.fetchImages(userQuery).then((images) => {
			this.setState({
				images: images.data
			})
		})
	}
	render(){	

		return(
			<div>
				<Search getResults={this.getResults} />
				<MemeList images={this.state.images} />

			</div>
 
		)
	}
}


export default MemeContainer;