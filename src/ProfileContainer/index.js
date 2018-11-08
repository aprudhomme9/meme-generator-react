import React, { Component } from 'react';
import {Button, Grid} from 'semantic-ui-react'

class ProfileContainer extends Component {
	constructor(){
		super()

		this.state = {
			memes: [],
			memeToEdit: ''
		}
	}
	fetchMemes = async () => {
		try {
			const fetchedMemes = await fetch('http://localhost:5000/api/v1/memes', {credentials: 'include'});

			const parsedMemes = await fetchedMemes.json()

			return parsedMemes
		} catch (err) {
			
		}
	}
	fetchUser = async () => {
		try {
			const currentUser = await fetch('http://localhost:5000/api/v1/user', {credentials: 'include'});
			const parsedUser = await currentUser.json();

			return parsedUser;
		} catch (err) {
			
		}
	}
	componentDidMount(){
		this.fetchMemes().then((memes) => {
			this.setState({
				memes: memes.data
			})
		})
		this.fetchUser().then((user) => {
			this.setState({
				user: user.data.username
			})
		})
	}
	upvote = async (e) => {
		console.log(e.currentTarget.id);
		console.log(this.state.memes[e.currentTarget.key]);

		const memeToEdit = this.state.memes.find((meme) => {
			return meme._id === e.currentTarget.id
			})
		console.log(memeToEdit);
		console.log(memeToEdit.upvotes);
		await fetch('http://localhost:5000/api/v1/memes/' + e.currentTarget.id, {
			method: 'PUT',
			body: JSON.stringify({upvotes: memeToEdit.upvotes + 1}) ,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
	downvote = (e) => {
		console.log(e.currentTarget.id, 'u suck');
	}
    render(){
    	console.log(this.state.memes);
    	const memes = this.state.memes.map((meme, i) => {
    		return (
		    	<div className='meme'>
    				<Grid container columns={1} textAlign='center' vertical='middle' style={{height: '100%'}}>
        			<Grid.Column style={{maxWidth: 450}}>
		    				<img width='400' height='400' key={meme._id} src={meme.imgUrl}/>
		    				<Button  fluid icon="arrow up"key={i} id={meme._id} color='green' onClick={this.upvote}></Button>
		    				<Button fluid icon="arrow down"id={meme._id} color='red' onClick={this.downvote}></Button>
		    			</Grid.Column>
		    		</Grid>
		    	</div>
    			)
    	})
    	
        return(
        	<div>
        		<h1>{this.state.user}'s Profile</h1>
            	{memes}
        	</div>
            
        )
    }
}
export default ProfileContainer;
