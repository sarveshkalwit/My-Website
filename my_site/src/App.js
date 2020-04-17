import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
} from 'react-router-dom';
import './App.css';

import Github from "./images/github.svg";

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<ExternalLink
					href="https://www.github.com/sarveshkalwit"
					src={ Github }
					alt="Github"
				/>
			</div>
		);
	}
}

class ExternalLink extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Link to={ this.props.href }>
					<img
						src={ this.props.src }
						alt={ this.props.name }
						width="20px"
						height="20px"
					/>
				</Link>
			</Router>
		);
	}
}

export default App;
