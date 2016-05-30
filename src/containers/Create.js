import React, {Component} from 'react'
import ColorPicker from '../components/ColorPicker'
import Darker from '../components/Darker'
import Mixer from '../components/Mixer'
import Selector from '../components/Selector'


export default class Create extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeColor: '#DEBAFF',
			selectedColors: [],
			backgroundDarker: 'white',
			backgroundMixer: 'white',
		}
	}

	removeSelected(color) {
		console.log("removeSelected ", color);
	}

	clickColor(e) {
		console.log("removeSelected ", e.target.style.backgroundColor);
	}

	changeBackgroundDarker() {
		if (this.state.backgroundDarker === 'white') {
			this.setState({
				backgroundDarker: 'black'
			})
		} else {
			this.setState({
				backgroundDarker: 'white'
			})
		}
	}

	selectAll(arr) {
		
	}
	removeAll(arr) {
		console.log("removeAll", arr);
	}

	changeBackgroundMixer() {

	}

	onDrag(activeColor, c) {
		this.setState({
			activeColor
		})
	}

	render() {
		return (
			<div className='row' style={{background: this.state.activeColor}}>
				<h2 className='col-md-12'>Choose your color, now your color - {this.state.activeColor}</h2>
				<ColorPicker color={this.state.activeColor} onDrag={this.onDrag.bind(this)}/>
				<Selector colors={this.state.selectedColors} removeSelected={this.removeSelected.bind(this)}/>
				<Darker onClick={this.clickColor.bind(this)} activeColor={this.state.activeColor}
						changeBackground={this.changeBackgroundDarker.bind(this)}
						background={this.state.backgroundDarker} selectAll={this.selectAll.bind(this)}
						removeAll={this.removeAll.bind(this)}/>
				<Mixer />
			</div>
		)
	}
}