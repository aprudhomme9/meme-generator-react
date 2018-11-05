import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MemeContainer from './MemeContainer';
import HeaderApp from './Header';

const mgUserName = 'aprudhomme';
const mgPassword = 'Jaglax19';
const apiKey = '53ab19f9-5502-408b-b645-284c4394a5a9';
class App extends Component {
	constructor(){
		super()

		this.state = {
			memes: []
		}
	}
  render() {
    return (
      <div className="App">
      	<HeaderApp />
        <MemeContainer />
      </div>
    );
  }
}

export default App;

