// base
import React from 'react';
import Select from 'grommet/components/Select';

// icons
import LikeIcon from 'grommet/components/icons/base/Like';
import StopIcon from 'grommet/components/icons/base/Stop';
import DislikeIcon from 'grommet/components/icons/base/Dislike';
import Link from 'react-router';

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
			likesarr :[obj[0].likes,
					obj[1].likes,
					obj[2].likes,
					obj[3].likes,
					obj[4].likes,
					obj[5].likes,
					obj[6].likes,
					obj[7].likes,
					obj[8].likes,
					obj[9].likes
			]
		};
	}

	
	likeIncrement(i){
		let a = this.state.likesarr.slice();
		a[i-1] = a[i-1]+1;
		this.setState({likesarr:a});
		//console.log(a[i]);
	}
	likedecrement(i){
		let a = this.state.likesarr.slice();
		a[i-1] = a[i-1]-1;
		this.setState({likesarr:a});
		//console.log(a[i]);
	}
	/**
	 * generate our blocks
	 */
	generateItem = (item) => {
		console.log(this.state);
		console.log(this);
		return (
			<div  className='image-container' key={item.id} >
				<h6 onClick={this.navuserpro.bind(this, item.author.name)}>{item.author.name}</h6>
				<img  onClick={this.clickEvent.bind(this, item.id)} src={item.url} />
					<div className='picture-details'>
						<div className='like'>
								<button onClick={()=>this.likeIncrement(item.id)} className="likebtn"><LikeIcon /></button>
								<button onClick={()=>this.likedecrement(item.id)} className="likebtn"><DislikeIcon/></button>
								<span>({this.state.likesarr[item.id-1]})</span>
							</div>
						<div className='content'>{item.content}</div>
					</div>
				</div>
		);
	}

	clickEvent = (id) => {
		this.props.history.push('images/' + id);
	};
	navuserpro(name){
		this.props.history.push('users/'+name);
	}

	change = () => {
		document.getElementById('imgcont').classList.toggle('image-container');
		}

	/**
	 * render
	 */
	render(){
		return (
			<div>
				<header>
						<div className='logo' />
						<h5>Welcome to our Insta</h5>
				</header>	
				<section>
					{
						obj.map(this.generateItem)
					}
				</section>
			</div>		
		);
	}
}

export default HomePage;
