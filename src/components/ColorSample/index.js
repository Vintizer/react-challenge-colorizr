import React, { Component } from 'react'
import './ColorSample.scss'


export default class ColorSample extends Component {
	render() {
		const {color, onClick} = this.props
		return (
			<div className='color-sample' onClick = {onClick} style = {{background: color}}>
			</div>
		)
	}
}