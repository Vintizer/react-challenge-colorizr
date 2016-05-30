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

    removeColorFromPalette(color) {
        let index;
        this.state.selectedColors.map((c, i)=> {
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
    clickColor(e) {
        const col = e.target.style.backgroundColor;
        console.log("col",col);
        console.log("col16 - ",col.toString(16));

        let res = this.state.selectedColors.slice();
        if (res.length === 10) {
            console.log("!10", col);
            res = res.slice(1,9);
            res.push(col);
            this.setState({
                selectedColors: res
            })
        }
    }

    addColor(arr) {
        console.log("arr",arr);

        arr.map((col)=> {
            if (res.indexOf(col) === -1) {
                res.push(col);
            }
        })
        return res
    }

    selectAll(arr) {
        this.setState({
            selectedColors : arr
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
                <Darker selectedColors = {this.state.selectedColors} 
                        onClick={this.clickColor.bind(this)} activeColor={this.state.activeColor}
                        changeBackground={this.changeBackgroundDarker.bind(this)}
                        background={this.state.backgroundDarker} selectAll={this.selectAll.bind(this)}
                        removeAll={this.removeAll.bind(this)}/>
                <Mixer changeBackground={this.changeBackgroundMixer.bind(this)}/>
            </div>
        )
    }
}