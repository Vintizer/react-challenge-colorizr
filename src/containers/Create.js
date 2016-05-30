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
		this.addColorToPalette(e.target.style.backgroundColor);
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

	addColorToPalette(color) {
		console.log("Inbox color - ",color);
		let add = true;
		this.state.selectedColors.map((c)=> {
			if (c === color) add = false;
		})
		if (add) {
			let selectedColors = this.state.selectedColors.slice();
			console.log("selectedColors",selectedColors);
			selectedColors.push(color);
			console.log("selectedColors",selectedColors);
			this.setState({
				selectedColors
			}, ()=>{console.log("setState selectedColors");})
		}
	}

	removeColorFromPalette(color) {
		let index;
		this.state.selectedColors.map((c,i)=> {
			if (c === color) index = i;
		})
		if (index) {
			let selectedColors = this.state.selectedColors.slice();
			selectedColors.slice(index, 1);
			this.setState({
				selectedColors
			})
		}
	}

	selectAll(arr) {
		arr.map((col)=> {
			this.addColorToPalette(col);
		})
	}

	removeAll(arr) {
		arr.map((col)=> {
			this.removeColorFromPalette(col);
		})
	}

	changeBackgroundMixer() {
		if (this.state.backgroundMixer === 'white') {
			this.setState({
				backgroundMixer: 'black'
			})
		} else {
			this.setState({
				backgroundMixer: 'white'
			})
		}
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
				<Mixer changeBackground={this.changeBackgroundMixer.bind(this)}/>
			</div>
		)
	}
}