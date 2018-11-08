import React, { Component } from 'react';
import { Modal, Form, Label, Button, Input, Grid, Segment } from 'semantic-ui-react'

class UserProfile extends Component {
	constructor(){
		super()

		this.state = {
			memes: [],
			memeToEdit: '',
			canVote: true
		}
	}
	fetchUser = async () => {
		try {
			const currentUser = await fetch(process.env.EXPRESS_URL + 'api/v1/user', {credentials: 'include'});
			const parsedUser = await currentUser.json();

			return parsedUser;	
		} catch (err) {
		
		}
		
	}
	fetchMemes = async () => {
		const userId = this.props.user._id;
		console.log(userId, '<---USER ID');
		try {
			const fetchedMemes = await fetch(process.env.EXPRESS_URL + 'api/v1/memes/profile/' + this.props.user._id, {credentials: 'include'});
			console.log(fetchedMemes, '<---GRABBING THE MEMES');
			const parsedMemes = await fetchedMemes.json()

			return parsedMemes
		} catch (err) {
			
		}
	}
	
	deleteMeme = async (e) => {
		e.preventDefault()
		try {
			await fetch(process.env.EXPRESS_URL + 'api/v1/memes/' + e.currentTarget.id, {
				method: 'DELETE'
			})
		} catch (err) {
			
		}
		this.fetchMemes().then((memes) => {
			this.setState({
				memes: memes.data
			})
		})
	}
	componentDidMount(){
		this.fetchMemes().then((memes) => {
			this.setState({
				memes: memes.data
			})
		})

		this.fetchUser().then((user) => {
			console.log(user);
			if(user.data !== null){
				if(user.data._id === this.props.user._id){
					this.setState({
						canVote: false
					})
				}
			}
		})

	}
	upvote = async (e) => {
		e.preventDefault()
		console.log(this.state.canVote, 'can vote?');
		const memeToEdit = this.state.memes.find((meme) => {
			return meme._id === e.currentTarget.id
			})

		await fetch(process.env.EXPRESS_URL + 'api/v1/memes/' + e.currentTarget.id, {
			method: 'PUT',
			body: JSON.stringify({upvotes: memeToEdit.upvotes + 1}) ,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if(this.state.canVote){
			this.fetchMemes().then((memes) => {
				this.setState({
					memes: memes.data

				})
			})
		}
		
	}
	downvote = async (e) => {
		e.preventDefault();

		const memeToEdit = this.state.memes.find((meme) => {
			return meme._id === e.currentTarget.id
			})
		await fetch(process.env.EXPRESS_URL + 'api/v1/memes/' + e.currentTarget.id, {
			method: 'PUT',
			body: JSON.stringify({downvotes: memeToEdit.downvotes + 1}) ,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if(this.state.canVote){
			this.fetchMemes().then((memes) => {
				this.setState({
					memes: memes.data

				})
			})
		}
	}
    render(){
    	const memes = this.state.memes.map((meme, i) => {
    		return (
    			<div className='meme'>
    			<Grid container columns={1} textAlign='center' vertical='middle' style={{height: '100%'}}>
        		<Grid.Column style={{maxWidth: 450}}>
	        		<Segment>
		    				<img width='400' height='400' key={meme._id} src={meme.imgUrl}/>
		    				<h3>Danks: {meme.upvotes}</h3>
		    				<h4>Whacks: {meme.downvotes}</h4>
		    				
		    					<Button hidden={this.state.showUpVote} key={i} id={meme._id} color='green' onClick={this.upvote}>Dank</Button>
		    				
		    				
		    					<Button hidden={this.state.showDownVote} id={meme._id} color='red' onClick={this.downvote}>Whack</Button>

  						</Segment>
	    		</Grid.Column>
	    	</Grid>	
    		</div>
    			)
    	})
    	
        return(
        	<div>
        		<h1>{this.props.user.username}'s Profile</h1>
            	{memes}
        	</div>
            
        )
    }
}
export default UserProfile;