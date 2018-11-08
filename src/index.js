import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
require('dotenv').config();
=======
require('dotenv').config()
>>>>>>> 0254d52e862168f7cfe1dc8f7c37f041527a451a

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
