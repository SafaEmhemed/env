import React from 'react';

// icons
import LikeIcon from 'grommet/components/icons/base/Like';
import DislikeIcon from 'grommet/components/icons/base/Dislike';
import EditIcon from 'grommet/components/icons/base/Edit';
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
		likes: 22,
		Comment:[
			{
				name:'Zakaria',
				comm:'ant ntn kdk'
			},
			{
				name:'Ahmed Rhuma',
				comm:'pla pla 1'
			}
		]
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
		likes: 23,
		Comment:[
			{
				name:'Mohammed',
				comm:'asd asd asd asd'
			},
			{
				name:'Mohammed',
				comm:'123456'
			}
		]
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
		likes: 1,
		Comment:[
			{
				name:'Mohammed',
				comm:'yyy hllf'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Zakaria',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Mohammed',
				comm:'yyy hllf'
			}
		]		
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
		likes: 0,
		Comment:[
			{
				name:'Mohammed',
				comm:'yyy hllf'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Zakaria',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Mohammed',
				comm:'yyy hllf'
			},
			{
				name:'Mohammed',
				comm:'yyy hllf'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Zakaria',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Mohammed',
				comm:'yyy hllf'
			}
		]
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
		likes: 300,
		Comment:[
			{
				name:'Mohammed',
				comm:'yyy hllf'
			}
		]

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
		likes: 25,
		Comment:[
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			}
		]
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
		likes: 27,
		Comment:[
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Mohammed',
				comm:'yyy hllf'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			}
		]
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
		likes: 7,
		Comment:[
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Mohammed',
				comm:'yyy hllf'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Zakaria',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Mohammed',
				comm:'yyy hllf'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			}
		]
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
		likes: 9,
		Comment:[
			{
				name:'Zakaria',
				comm:'jjj ffff rrrr'
			}
		]
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
		likes: 2,
		Comment:[
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			},
			{
				name:'Ahmed Rhuma',
				comm:'jjj ffff rrrr'
			}
		]
	}
];

class Images extends React.Component {
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
	navuserpro(name){
		this.props.history.push('../users/'+name);
	}



	getItem = (id) =>{
		for (let i =0 ; i < obj.length ; i ++){
			if(id == obj[i].id){
				return obj[i];
			}
		}
	}
	generatComm=(commment) =>{
		return(
			<div className="comment">
				<h6 onClick={()=>this.props.history.push('../users/'+commment.name)}>{commment.name}</h6>
				<p>{commment.comm}</p>
			</div>
		);
		
	}

	
	render(){
		console.log(this.props.match.params.imgId);
		const item = this.getItem(this.props.match.params.imgId);
		var container = {
		width : '50%',
		margin: '0 auto',
		border: '#ada8a8 solid 1px',
		display: 'block',
		padding:'15px'
		}
		return(
			<div className ='imgpage'>
				<div  style = {container}   key={item.id} >
					<h6 onClick={this.navuserpro.bind(this, item.author.name)}>{item.author.name}</h6>
					<img  src={'../' +item.url} />
					<div className='picture-details'>
						<div className='like'>
								<button onClick={()=>this.likeIncrement(item.id)} className="likebtn"><LikeIcon /></button>
								<button onClick={()=>this.likedecrement(item.id)} className="likebtn"><DislikeIcon/></button>
								<span>({this.state.likesarr[item.id-1]})</span>
							</div>
						<div className='content'>{item.content}</div>
					</div>
				</div>
				<div>
					{item.Comment.map(this.generatComm)}
					<div className="comm">
						<textarea placeholder="write a comment.."></textarea>
						<button className="commBtn"><EditIcon/></button>
					</div>
				</div>
			</div>

			/*** 
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
			****/
		);
	}
}

export default Images;