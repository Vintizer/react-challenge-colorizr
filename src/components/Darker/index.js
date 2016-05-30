import React, {Component} from 'react'
import ColorSample from '../ColorSample'
import './Darker.scss'

export default class Explore extends Component {
	toInt(hex) {
		return parseInt('0x' + hex)
	}

	toHex(...val) {
		let a = val[0] >= 0 ? val[0].toString(16) : '00';
		let b = val[1] >= 0 ? val[1].toString(16) : '00';
		let c = val[2] >= 0 ? val[2].toString(16) : '00';
		return '#' + (a.length === 2 ? a : ('0' + a))
			+ (b.length === 2 ? b : ('0' + b))
			+ (c.length === 2 ? c : ('0' + c));
	}

	findMax(...val) {
		let a = 0, res;
		val.map((i, index)=> {
			if (i > a) {
				a = i;
				res = index;
			}
		})
		return [a, res];
	}

	makeColorTemplate(color) {
		if(color === '#000000') return this.toHex(255,255,255);
		let template;
		let rgb = {
			red: this.toInt(color.slice(1, 3)),
			green: this.toInt(color.slice(3, 5)),
			blue: this.toInt(color.slice(5))
		};
		let diff = {
			rg: rgb.red - rgb.green,
			gb: rgb.green - rgb.blue
		}
		let resMax = this.findMax(rgb.red, rgb.green, rgb.blue);
		let max = 255 - resMax[0] % 8;
		let maxColor;
		if (resMax[1] === 0) {
			template = this.toHex(max, max - diff.rg, max - diff.rg - diff.gb);
		} else if (resMax[1] === 1) {
			template = this.toHex(max + diff.rg, max, max - diff.gb);
		} else if (resMax[1] === 2) {
			template = this.toHex(max + diff.gb + diff.rg, max + diff.gb, max);
		}
		return template
	}

	generateDarkerColors(color) {
		let template = this.makeColorTemplate(color);
		let rgb = {
			red: this.toInt(template.slice(1, 3)),
			green: this.toInt(template.slice(3, 5)),
			blue: this.toInt(template.slice(5))
		}
		let res = [];
		let sendData = [rgb.red, rgb.green, rgb.blue];
		for (let i = 9; i > -1; i--) {
			res[i] = this.toHex(sendData[0], sendData[1], sendData[2]);
			let count = i % 2 ? 25 : 26;
			sendData = [sendData[0] - count, sendData[1] - count, sendData[2] - count]; //Cound needed data send
		}
		return res;
	}
	
	render() {
		const {onClick, activeColor, background, changeBackground, selectAll, removeAll, selectedColors} = this.props
		const arrColors = this.generateDarkerColors(activeColor);
		return (
			<div className='row color-sample-arr' style={{background, padding: '10px'}}>
				{arrColors.map((color, i)=> {
					return <ColorSample key={i} color={color} onClick={onClick} selectedColors = {selectedColors}/>
				})}
				<button onClick={changeBackground}>{background === 'white' ? 'Dark': 'Light'} background</button>
				<button onClick={() => selectAll(arrColors)}>Select all</button>
				<button onClick={() => removeAll(arrColors)}>Remove all</button>
			</div>
		)
	}
}