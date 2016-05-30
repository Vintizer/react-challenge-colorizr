import React from 'react'
import { Route, IndexRoute } from 'react-router'
import ColorPicker from './components/ColorPicker/'
import Create from './containers/Create'
import LinkMenu from './containers/LinkMenu'
import Explore from './containers/Explore'
import Presets from './containers/Presets'
import Export from './containers/Export'
import NotFound from './components/NotFound/'

export const routes = (
		<div>
			<Route path='/' component={LinkMenu}>
				<IndexRoute component={Create} />
				<Route path='/create' component={Create } />
				<Route path='/explore' component={Explore } />
				<Route path='/presets' component={Presets } />
				<Route path='/export' component={Export } />
			</Route>
			<Route path='*' component={NotFound} />
		</div>
	)






// <ColorPicker onDrag={this.onDrag.bind(this)} activeColor={this.state.activeColor}/>