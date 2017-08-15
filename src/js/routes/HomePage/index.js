// base
import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Select from 'grommet/components/Select';

import './style.scss';

const obj = [
	{
		id: 1,
		author: {
			id: 1,
			name: 'Ahmed Rhuma',
			avatar: ''
		},
		time: '1 hour ago',
		url: 'uploads/news/pic01.jpg',
		content: 'Picture #1'
	},
	{
		id: 2,
		author: {
			id: 1,
			name: 'Ahmed Rhuma',
			avatar: ''
		},
		time: '2 hour ago',
		url: 'uploads/news/pic02.jpg',
		content: 'Picture #2'
	},
	{
		id: 3,
		author: {
			id: 2,
			name: 'Zakaria',
			avatar: ''
		},
		time: '20 min ago',
		url: 'uploads/news/pic03.jpg',
		content: 'Picture #3'
	},
	{
		id: 4,
		author: {
			id: 45,
			name: 'Mohammed',
			avatar: ''
		},
		time: '1 hour ago',
		url: 'uploads/news/pic01.jpg',
		content: 'Picture #4'
	},
	{
		id: 1,
		author: {
			id: 1,
			name: 'Ahmed Rhuma',
			avatar: ''
		},
		time: '1 hour ago',
		url: 'uploads/news/pic01.jpg',
		content: 'Picture #1'
	},
	{
		id: 2,
		author: {
			id: 1,
			name: 'Ahmed Rhuma',
			avatar: ''
		},
		time: '2 hour ago',
		url: 'uploads/news/pic02.jpg',
		content: 'Picture #2'
	},
	{
		id: 3,
		author: {
			id: 2,
			name: 'Zakaria',
			avatar: ''
		},
		time: '20 min ago',
		url: 'uploads/news/pic03.jpg',
		content: 'Picture #3'
	},
	{
		id: 4,
		author: {
			id: 45,
			name: 'Mohammed',
			avatar: ''
		},
		time: '1 hour ago',
		url: 'uploads/news/pic01.jpg',
		content: 'Picture #4'
	},
	{
		id: 3,
		author: {
			id: 2,
			name: 'Zakaria',
			avatar: ''
		},
		time: '20 min ago',
		url: 'uploads/news/pic03.jpg',
		content: 'Picture #3'
	},
	{
		id: 4,
		author: {
			id: 45,
			name: 'Mohammed',
			avatar: ''
		},
		time: '1 hour ago',
		url: 'uploads/news/pic01.jpg',
		content: 'Picture #4'
	}
];

/**
 * Home Component
 */
class HomePage extends React.Component{
	/**
	 * @constructor
	 */
	constructor(){
		super();
		this.state = {
			cols: 3
		};
	}
	/**
	 * generate our blocks
	 */
	generateItem = (item, index) => {
		console.log(this.state);
		console.log(this);
		return (
			<Col key={index} lg={this.state.cols} md={this.state.cols} sm={6} xs={12}>
				<img onClick={this.clickEvent} src={item.url} />
				<div className='picture-details'>
					<p>{item.content}</p>
				</div>
			</Col>
		);
	}

	clickEvent = () => {
		console.log('clicked !');
	};

	change = (option) => {
		const value = 12 / option.value;
		this.setState({
			cols: value
		});
	}

	/**
	 * render
	 */
	render(){
		return (
			<Grid fluid className='page'>
				<Row>
					<Col xs={4} lg={4} sm={12} md={4} />
					<Col xs={4} lg={4} sm={12} md={4}>
						<div className='logo' />
						<h5>Welcome to our Insta</h5>
					</Col>
					<Col xs={4} lg={4} sm={12} md={4} />
				</Row>
				<Row>
					<Select
					options={[
						1,
						2,
						3,
						4
					]}
					onChange={this.change} />
				</Row>
				<Row>
					{
						obj.map(this.generateItem)
					}
				</Row>
			</Grid>
		);
	}
}

export default HomePage;
