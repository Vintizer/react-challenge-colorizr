import React, { Component } from 'react'
export default class Explore extends Component {
	render() {
		const {colors, removeSelected} = this.props;
		return (
			<div className='row'>
				<div className='col-md-12'>Color - {colors}, removeSelected - {removeSelected}</div>
			</div>
		)
	}
}