import React, {Component} from 'react';
import {Button} from 'semantic-ui-react'


class VoteButtons extends Component{
	render(){
		const buttons = this.props.memes.map((meme, i) => {
			return(
				<div>
				<h3>Danks: {meme.upvotes}</h3>
		    	<h4>Whacks: {meme.downvotes}</h4>
		    				
		    	<Button key={i} id={meme._id} color='green' onClick={this.props.upvote}>Dank</Button>
		    							
		   		<Button id={meme._id} color='red' onClick={this.props.downvote}>Whack</Button>
		   		</div>
			)
		})
		return(
			<div>
				{buttons}
			</div>

			)
	}
}

export default VoteButtons