import React, {Component} from 'react';

import {Button, Grid, Label, Header, Input} from 'semantic-ui-react';

class HeaderApp extends Component{
	render(){
		return(
			<Header>
				<nav>
				<Grid columns={1} divided textAlign='left' style={{ height: '100%' }} verticalAlign='top' stackable>
        	
          	<Grid.Column>
							<a href='#'>Profile</a><br/>
							<a href='#'>Channels</a><br/>
							<a href='#'>LeaderBoard</a><br/>
							<Input type="text" placeholder="Search..."/>
      		</Grid.Column>	
      	
      </Grid>
			</nav>



			</Header>


			)
	}
}

export default HeaderApp;