import 'whatwg-fetch';
import { polyfill as promisePolyfill } from 'es6-promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import './reducers/root'; // if u remove this it will break the hmr for the reducers
import history from 'history-init';
import { connectRouter } from 'connected-react-router/immutable';

import App from './App';

promisePolyfill();

const MOUNT_NODE = document.getElementById('content');

/**
 * render the App
 */
const render = () => {
	ReactDOM.render(
		<AppContainer>
			<App />
		</AppContainer>,
		MOUNT_NODE
	);
};

// ========================================================
// DEV!
// ========================================================
render();

if (module.hot){
	module.hot.accept('./reducers/root.js', () => {
		const nextRootReducer = require('./reducers/root.js').default;
		store.replaceReducer(connectRouter(history)(nextRootReducer));
	});

	module.hot.accept('./store');
	module.hot.accept('./routes');
	module.hot.accept('./App');
}

// ========================================================
// Go!
// ========================================================
document.body.classList.remove('loading');
