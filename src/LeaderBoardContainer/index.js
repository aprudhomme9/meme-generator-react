import React, { Component } from 'react';
import { Form, Label, Button, Input, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import serverUrl from '../serverUrl.js'


class LeaderBoardContainer extends Component {
	constructor(){
	    super();
	    this.state = {
	        popularMemes: [],
	        sortBy: 'Hot'
	    }
	}
	fetchMemes = async () => {
	try {
		const currentMeme = await fetch(serverUrl + 'api/v1/memes/popular', {credentials: 'include'});
		const parsedMeme = await currentMeme.json();
		console.log(parsedMeme, 'parsed memes')
		return parsedMeme;
	} catch (err) {
		
	}
}
handleSort = (e) => {
	console.log(e.currentTarget.name);
	this.setState({
		sortBy: e.currentTarget.name
	})
}
componentDidMount(){
	this.fetchMemes().then((meme) => {
		this.setState({
			popularMemes: meme.data
		})
	})
}
	render(){
		// const popularMemesUser = this.state.popularMemes.user.map((user,i) => {
		// 	return user.user
		// })
		if(this.state.sortBy == 'Hot'){
			const popularMemeListSorted = this.state.popularMemes.sort((a, b) => {
				return ((b.upvotes-b.downvotes)/(b.upvotes + b.downvotes)) - ((a.upvotes-a.downvotes)/(a.upvotes+a.downvotes))
			})
		} else if (this.state.sortBy == 'Dank'){
			const popularMemeListSorted = this.state.popularMemes.sort((a, b) => {
				return (((b.upvotes)/(b.upvotes + b.downvotes))*b.upvotes - ((a.upvotes)/(a.upvotes + a.downvotes))*a.upvotes)
			})
		} else {
			const popularMemeListSorted = this.state.popularMemes.sort((a, b) => {
				return ((b.downvotes)/(b.upvotes + b.downvotes)) - ((a.downvotes)/(a.upvotes + a.downvotes))
			})
		}
		
		const popularMemeList = this.state.popularMemes.map((image, i) => {
		
		console.log(this.state.popularMemes, 'USERS')

		return (
			<div>
				<Grid container columns={1} textAlign='center' vertical='middle' style={{height: '100%'}}>
        		<Grid.Column style={{maxWidth: 450}}>
	        		<Segment>
	        			<h1>{image.user.username}</h1>
								<img width='400' height='400' key={i} src={image.imgUrl}/>
				    				<h3>Danks: {image.upvotes}</h3>
				    				<h3>Whacks: {image.downvotes}</h3>
				    				<br/>
				    			</Segment>
				    		</Grid.Column>
				    	</Grid>		
    	</div>
		)
	})

	    return(
	    	<div>
	        <h1>All Time {this.state.sortBy}</h1>
	        <Button name='Hot' onClick={this.handleSort}>Hot</Button>
			<Button name='Dank' onClick={this.handleSort}>Dank</Button>
			<Button name='Whack' onClick={this.handleSort}>Whack</Button>
	        {popularMemeList}
	        </div>
        )
    }
}
export default LeaderBoardContainer;
