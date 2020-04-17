import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
} from 'react-router-dom';
import './App.css';

import Linkedin from "./images/linkedin.svg";
import Github from "./images/github.svg";
import Medium from "./images/medium.svg";
import Soundcloud from "./images/soundcloud.svg";
import Instagram from "./images/instagram.svg";

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<ExternalLink
					href="https://www.linkedin.com/in/sarvesh-kalwit/"
					src={ Linkedin }
					alt="Linkedin"
				/>
				<ExternalLink
					href="https://www.github.com/sarveshkalwit"
					src={ Github }
					alt="Github"
				/>
				<ExternalLink
					href="/"
					src={ Medium }
					alt="Medium"
				/>
				<ExternalLink
					href="/"
					src={ Soundcloud }
					alt="Soundcloud"
				/>
				<ExternalLink
					href="/"
					src={ Instagram }
					alt="Instagram"
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
		const iconSize = "25px";

		return (
			<Router>
				<Link to={ this.props.href }>
					<img
						src={ this.props.src }
						alt={ this.props.name }
						width={ iconSize }
						height={ iconSize }
					/>
				</Link>
			</Router>
		);
	}
}

export default App;
