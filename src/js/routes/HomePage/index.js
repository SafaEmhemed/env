// base
import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Select from 'grommet/components/Select';

// icons
import LikeIcon from 'grommet/components/icons/base/Like';


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
		content: 'Picture #1',
		likes: 22
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
		content: 'Picture #2',
		likes: 23
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
		content: 'Picture #3',
		likes: 1
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
		content: 'Picture #4',
		likes: 0
	},
	{
		id: 5,
		author: {
			id: 1,
			name: 'Ahmed Rhuma',
			avatar: ''
		},
		time: '1 hour ago',
		url: 'uploads/news/pic01.jpg',
		content: 'Picture #1',
		likes: 300
	},
	{
		id: 6,
		author: {
			id: 1,
			name: 'Ahmed Rhuma',
			avatar: ''
		},
		time: '2 hour ago',
		url: 'uploads/news/pic02.jpg',
		content: 'Picture #2',
		likes: 25
	},
	{
		id: 7,
		author: {
			id: 2,
			name: 'Zakaria',
			avatar: ''
		},
		time: '20 min ago',
		url: 'uploads/news/pic03.jpg',
		content: 'Picture #3',
		likes: 27
	},
	{
		id: 8,
		author: {
			id: 45,
			name: 'Mohammed',
			avatar: ''
		},
		time: '1 hour ago',
		url: 'uploads/news/pic01.jpg',
		content: 'Picture #4',
		likes: 7
	},
	{
		id: 9,
		author: {
			id: 2,
			name: 'Zakaria',
			avatar: ''
		},
		time: '20 min ago',
		url: 'uploads/news/pic03.jpg',
		content: 'Picture #3',
		likes: 9
	},
	{
		id: 10,
		author: {
			id: 45,
			name: 'Mohammed',
			avatar: ''
		},
		time: '1 hour ago',
		url: 'uploads/news/pic01.jpg',
		content: 'Picture #4',
		likes: 2
	}
];

import './style.scss';

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
	generateItem = (item) => {
		console.log(this.state);
		console.log(this);
		return (
			<Col key={item.id} lg={this.state.cols} md={this.state.cols} sm={6} xs={12}>
				<img onClick={this.clickEvent.bind(this, item.id)} src={item.url} />
				<div className='picture-details'>
					<p>{item.content}</p>
					<div className='action-container'>
						<div className='like'>
							<LikeIcon />
							<span>({item.likes})</span>
						</div>
					</div>
				</div>
			</Col>
		);
	}

	clickEvent = (id) => {
		this.props.history.push('images/' + id);
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
