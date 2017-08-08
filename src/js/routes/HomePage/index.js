// base
import React from 'react';

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
			<div className='clearfix' style={{ height: '100%' }}>
				<h1>Welcome to your first project</h1>
			</div>
		);
	}
}

export default HomePage;
