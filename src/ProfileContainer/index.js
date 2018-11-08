import React, { Component } from 'react';
import { Form, Label, Button, Input, Grid, Segment } from 'semantic-ui-react'

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
			const fetchedMemes = await fetch(process.env.EXPRESS_URL + 'api/v1/memes', {credentials: 'include'});

			const parsedMemes = await fetchedMemes.json()

			return parsedMemes
		} catch (err) {
			
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
		this.fetchUser().then((user) => {
			if(user.data == null){
				this.props.history.push('/login')
			} else {
				this.setState({
					user: user.data.username
				})
			}	
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

		await fetch(process.env.EXPRESS_URL + 'api/v1/memes/' + e.currentTarget.id, {
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
		await fetch(process.env.EXPRESS_URL + 'api/v1/memes/' + e.currentTarget.id, {
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
// <<<<<<< HEAD
// 		    	<div className='meme'>
//     				<Grid container columns={1} textAlign='center' vertical='middle' style={{height: '100%'}}>
//         			<Grid.Column style={{maxWidth: 450}}>
// 		    				<img width='400' height='400' key={meme._id} src={meme.imgUrl}/>
// 		    				<Button  fluid icon="arrow up"key={i} id={meme._id} color='green' onClick={this.upvote}></Button>
// 		    				<Button fluid icon="arrow down"id={meme._id} color='red' onClick={this.downvote}></Button>
// 		    			</Grid.Column>
// 		    		</Grid>
// 		    	</div>
// =======
    			<div className='meme'>
    			<Grid container columns={1} textAlign='center' vertical='middle' style={{height: '100%'}}>
        		<Grid.Column style={{maxWidth: 450}}>
	        		<Segment>
		    				<img width='400' height='400' key={meme._id} src={meme.imgUrl}/>
		    				<h3>Danks: {meme.upvotes}</h3>
		    				<h4>Whacks: {meme.downvotes}</h4>
		    				<Button id={meme._id} color='blue' onClick={this.deleteMeme}>Delete</Button>
  						</Segment>
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
