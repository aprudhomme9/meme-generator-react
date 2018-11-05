import React, {Component} from 'react';

import {Button, Grid, Label, Header} from 'semantic-ui-react';

class HeaderApp extends Component{
	render(){
		return(
			<Header>

				<nav>
					<a href='#'>Profile</a><br/>
					<a href='#'>Channels</a>
				</nav>

			</Header>


			)
	}
}

export default HeaderApp;