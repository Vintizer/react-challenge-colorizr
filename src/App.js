import React, {Component} from 'react';
import {Router, browserHistory} from 'react-router'
import { routes } from './routes'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeColor: '#452135'
		}
	}

	onDrag(activeColor, c) {
		this.setState({
			activeColor
		})
	}

	render() {
		return (
			<div style={{background: this.state.activeColor}}>
				<Router history={browserHistory} routes={routes} />

			</div>
		)
	}
}
