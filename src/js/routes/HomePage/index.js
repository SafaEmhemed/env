// base
import React from 'react';

import Ahmed from './todo';

import './style.scss';

/**
 * Home Component
 */
class HomePage extends React.Component{
	/**
	 * render
	 */
	render(){
		return (
			<div>
				<h1>Hi class</h1>
				<Ahmed />
			</div>
		);
	}
}

export default HomePage;
