import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'

class UserProfile extends Component {
	constructor(){
		super()

		this.state = {
			memes: [],
			memeToEdit: ''
		}
	}
	fetchMemes = async () => {
		const userId = this.props.user._id;
		console.log(userId, '<---USER ID');
		try {
			const fetchedMemes = await fetch('http://localhost:5000/api/v1/memes/profile/' + this.props.user._id, {credentials: 'include'});
			console.log(fetchedMemes, '<---GRABBING THE MEMES');
			const parsedMemes = await fetchedMemes.json()

			return parsedMemes
		} catch (err) {
			
		}
	}
	
	deleteMeme = async (e) => {
		e.preventDefault()
		try {
			await fetch('http://localhost:5000/api/v1/memes/' + e.currentTarget.id, {
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
		console.log(this.state.memes, '<--memes in state');
	}
	upvote = async (e) => {
		e.preventDefault()
		const memeToEdit = this.state.memes.find((meme) => {
			return meme._id === e.currentTarget.id
			})

		await fetch('http://localhost:5000/api/v1/memes/' + e.currentTarget.id, {
			method: 'PUT',
			body: JSON.stringify({upvotes: memeToEdit.upvotes + 1}) ,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		this.fetchMemes().then((memes) => {
			this.setState({
				memes: memes.data
			})
		})
	}
	downvote = async (e) => {
		e.preventDefault();

		const memeToEdit = this.state.memes.find((meme) => {
			return meme._id === e.currentTarget.id
			})
		await fetch('http://localhost:5000/api/v1/memes/' + e.currentTarget.id, {
			method: 'PUT',
			body: JSON.stringify({downvotes: memeToEdit.downvotes + 1}) ,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		this.fetchMemes().then((memes) => {
			console.log(memes, '<---grabbing the memes');
			this.setState({
				memes: memes.data
			})
		})
	}
    render(){
    	console.log(this.props.user);
    	console.log(this.state.memes);
    	const memes = this.state.memes.map((meme, i) => {
    		return (
    			<div className='meme'>
    				<img width='400' height='400' key={meme._id} src={meme.imgUrl}/>
    				<p>Danks: {meme.upvotes}</p>
    				<p>Whacks: {meme.downvotes}</p>
    				<Button key={i} id={meme._id} color='green' onClick={this.upvote}>Dank</Button>
    				<Button id={meme._id} color='red' onClick={this.downvote}>Whack</Button>
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