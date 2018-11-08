import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'

class ProfileContainer extends Component {
	constructor(){
		super()

		this.state = {
			memes: [],
			memeToEdit: '',
			user: ''
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
		this.fetchUser().then((user) => {
			this.setState({
				user: user.data.username
			})
		})
		this.fetchMemes().then((memes) => {
			this.setState({
				memes: memes.data
			})
		})
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
			this.setState({
				memes: memes.data
			})
		})
	}
    render(){
    	console.log(this.state.memes);
    	const memes = this.state.memes.map((meme, i) => {
    		return (
    			<div className='meme'>
    				<img width='400' height='400' key={meme._id} src={meme.imgUrl}/>
    				<p>Danks: {meme.upvotes}</p>
    				<p>Whacks: {meme.downvotes}</p>
    				<Button id={meme._id} color='blue' onClick={this.deleteMeme}>Delete</Button>
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
