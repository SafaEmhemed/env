// base
import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ar from 'react-intl/locale-data/ar';
import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';
import { Provider } from 'react-redux';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

// local imports
import store from './store';
import Main from './components/Main';
import History from './history-init';
import '../scss/index.scss';
const locale = getCurrentLocale();
addLocaleData(ar);

const socket = io({
	autoConnect: false
});

let messages;
try {
	messages = require(`./messages/${locale}`);
}
catch (e){
	messages = require('./messages/ar-AR');
}
const localeData = getLocaleData(messages, locale);

// ===== This checks if u are logged in or not and redirect u to login if ur not logged in ======
// if (window.location.pathname !== '/login') {
//   store.dispatch(initialize(window.location.pathname));
// }
//
export default () => (
	<Provider store={store}>
		<IntlProvider locale={localeData.locale} messages={localeData.messages}>
			<SocketProvider socket={socket}>
				<Main history={History} />
			</SocketProvider>
		</IntlProvider>
	</Provider>
);
