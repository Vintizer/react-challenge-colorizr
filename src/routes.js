import React from 'react'
import { Route, IndexRoute } from 'react-router'
import ColorPicker from './components/ColorPicker/'
import App from './containers/App'
import NotFound from './components/NotFound/'

export const routes = (
		<div>
			<Route path='/' component={App}>
				<IndexRoute component={ColorPicker} />
			</Route>
			<Route path='*' component={NotFound} />
		</div>
	)






// <ColorPicker onDrag={this.onDrag.bind(this)} activeColor={this.state.activeColor}/>