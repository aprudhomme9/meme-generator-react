import React, { Component } from 'react';


class ProfileContainer extends Component {
	constructor(){
		super()

		this.state = {
			memes: []
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
	componentDidMount(){
		this.fetchMemes().then((memes) => {
			this.setState({
				memes: memes.data
			})
		})
	}
    render(){
    	const memes = this.state.memes.map((meme, i) => {
    		return <img width='400' height='400' key={i} src={meme.imgUrl}/>
    	})
        return(
        	<div>
        		<h1>Profile</h1>
            	{memes}
        	</div>
            
        )
    }
}
export default ProfileContainer;
