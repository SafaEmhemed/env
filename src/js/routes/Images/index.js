import React from 'react';

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

class Images extends React.Component {

	getItem = (id) =>{
		for (let i =0 ; i < obj.length ; i ++){
			if(id == obj[i].id){
				return obj[i];
			}
		}
	}

	render(){
		console.log(this.props.match.params.imgId);
		const item = this.getItem(this.props.match.params.imgId);
		return(
			<div>
			<img src={'../' + item.url} />
			<div className='picture-details'>
				<p>{item.content}</p>
				<div className='action-container'>
					<div className='like'>
						<LikeIcon />
						<span>({item.likes})</span>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

export default Images;