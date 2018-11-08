import React, { Component } from 'react';
import { Form, Label, Button, Input, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LeaderBoardContainer extends Component {
	constructor(){
	    super();
	    this.state = {
	        popularMemes: []
	    }
	}
	fetchMemes = async () => {
	try {
		const currentMeme = await fetch('http://localhost:5000/api/v1/memes/popular', {credentials: 'include'});
		const parsedMeme = await currentMeme.json();
		console.log(parsedMeme, 'parsed memes')
		return parsedMeme;
	} catch (err) {
		
	}
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
		const popularMemeListSorted = this.state.popularMemes.sort((a, b) => {
			return b.upvotes - a.upvotes
		})
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
	        <h1>Top Memes</h1>
	        {popularMemeList}
	        </div>
        )
    }
}
export default LeaderBoardContainer;
