import React, {Component} from 'react';

import {Button, Grid, Label, Header, Input, Icon} from 'semantic-ui-react';

import { Link } from 'react-router-dom'

import Logout from '../Logout'

import Login from '../Login'

class HeaderApp extends Component{
	render(){
		// console.log(this.state.isLoggedIn, 'ISLOGGED')
		return(
			<Header>
				<nav>
				<Grid columns={1} divided textAlign='left' style={{ height: '100%' }} verticalAlign='top' stackable>
          <Grid.Column>
          	<Logout /> 
          	{this.props.isLoggedIn ? <Logout /> : <Link to='/login'>Login/Register</Link> }<br/>
          	<Link to='/home'>Home</Link><br/>
						<Link to='/profile'>Profile</Link><br/>
						<Link to='/leaderboard'>LeaderBoard</Link><br/>
      		</Grid.Column>	
      	</Grid>
						<Input divided textAlign='right' style={{ height: '100%' }} verticalAlign='top' stackable type="text" placeholder="Search Dank Memes.."/>
				</nav>
			</Header>
		)
	}
}
export default HeaderApp;
        	
      	





