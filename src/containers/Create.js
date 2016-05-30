import React, { Component } from 'react'
import ColorPicker from '../components/ColorPicker'

export default class Create extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeColor: '#DEBAFF'
		}
	}
	
	onDrag(activeColor, c) {
		this.setState({
			activeColor
		})
	}
	
	render() {
		return (
			<div className='row'  style={{background: this.state.activeColor}}>
				<h2 className='col-md-12'>Choose your color, now your color - {this.state.activeColor}</h2>
				<ColorPicker color = {this.state.activeColor} onDrag = {this.onDrag.bind(this)}/>
			</div>
		)
	}
}