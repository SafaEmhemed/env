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
		scrollTop: null
	}
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
