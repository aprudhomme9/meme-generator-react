import React, { Component } from 'react';


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
		const popularMemeListSorted = this.state.popularMemes.sort((a, b) => {
			return b.upvotes - a.upvotes
		})
		const popularMemeList = this.state.popularMemes.map((image, i) => {
		
		console.log(this.state.popularMemes)

		return (
			<div>
				<img width='400' height='400' key={i} src={image.imgUrl}/>
    				<p>Danks: {image.upvotes}</p>
    				<p>Whacks: {image.downvotes}</p>
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
