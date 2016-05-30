import React, {Component} from 'react'
import './ColorSample.scss'


export default class ColorSample extends Component {
	render() {
		const {color, onClick, selectedColors} = this.props
		let active;
		if (selectedColors.indexOf(color) > -1) {
			active = true;
		}
		return (
			<div className={'color-sample' + (active ? ' palitra' : '')} onClick={onClick} style={{background: color}}>
			</div>
		)
	}
}