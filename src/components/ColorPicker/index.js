import React, {Component} from 'react';
var ColorPicker = require('react-color-picker')
import './ColorPicker.scss';

export default class App extends Component {

	render() {
		const {color, onDrag} = this.props;
		return (
			<div >
				<ColorPicker value={color} onDrag={onDrag}/>
			</div>

		)
	}
}