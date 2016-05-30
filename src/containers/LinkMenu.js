import React, {Component} from 'react'
import NavLink from '../components/NavLink'

export default class LinkMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			route: window.location.hash.substr(1)
		}
	}


	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			})
		})
	}

	render() {
		return (
			<div className='container'>
				<h1>App</h1>
				<ul>
					<li><NavLink to='/create'>Create</NavLink></li>
					<li><NavLink to='/explore'>Explore</NavLink></li>
					<li><NavLink to='/presets'>Presets</NavLink></li>
					<li><NavLink to='/export'>Export</NavLink></li>
				</ul>
					{this.props.children}
			</div>
		)

	}
}