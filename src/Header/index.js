import React, {Component} from 'react';

import {Button, Grid, Label, Header, Input, Icon} from 'semantic-ui-react';

import { Link } from 'react-router-dom'

class HeaderApp extends Component{
	render(){
		return(
			<Header>
				<nav>
				<Grid columns={1} divided textAlign='left' style={{ height: '100%' }} verticalAlign='top' stackable>
          <Grid.Column>
          	<Link to='/home'>Home</Link><br/>
						<Link to='/profile'>Profile</Link><br/>
						<Link to='/channels'>Channels</Link><br/>
						<Link to='/leaderboard'>LeaderBoard</Link><br/>
						<Input type="text" placeholder="Search Dank Memes.."/>
      		</Grid.Column>	
      	</Grid>
				</nav>
			</Header>
		)
	}
}
export default HeaderApp;
        	
      	





