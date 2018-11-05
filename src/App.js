import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MemeContainer from './MemeContainer';

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
        <MemeContainer />
      </div>
    );
  }
}

export default App;

