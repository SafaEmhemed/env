// base
import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

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
			<Grid fluid>
				<Row>
					<Col xs={4} lg={4} sm={12} md={4} />
					<Col xs={4} lg={4} sm={12} md={4}>
						<img src='images/slider/1.jpg' />
					</Col>
					<Col xs={4} lg={4} sm={12} md={4} />
				</Row>
			</Grid>
		);
	}
}

export default HomePage;
