import { createStore, compose, applyMiddleware } from 'redux';
import root from './reducers/root';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { fromJS } from 'immutable';

import History from 'history-init';

import { routerMiddleware, connectRouter } from 'connected-react-router/immutable';

const initialState = fromJS({
	homepage: {
		stickyMenu: {
			appear : false,
			disappear : false,
			class: ''
		},
		parallax: null,
		scrollTop: null,
		// nothing above

	},

	// nothing
	insta: [
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
	]


});
const middlewares = [
	routerMiddleware(History),
	thunk,
	logger
];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	connectRouter(History)(root),
	initialState,
	composeEnhancer(applyMiddleware(...middlewares)));

export default store;
