import React, {Component} from 'react';
var ColorPicker = require('react-color-picker')
import './ColorPicker.scss';

export default class App extends Component {

	render() {
		const color = this.props.activeColor;
		return (
			<div >
				<ColorPicker value={color} onDrag={this.props.onDrag}/>
				<div style={{background: color, width: 100, height: 50, color: 'white'}}>
					{color}
				</div>
			</div>

		)
	}
}