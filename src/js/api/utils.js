import RequestWatcher from './request-watcher';

let _headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
};

/**
 * Header
 */
export function headers(){
	return _headers;
}

/**
 * Parse JSON
 */
export function parseJSON(response){
	if (response.ok){
		return response.json();
	}
	return Promise.reject(response);
}

/**
 * Update Headers
 */
export function updateHeaders(newHeaders){
	_headers = { ..._headers, newHeaders };
	Object.keys(_headers).forEach((key) => {
		if (undefined === _headers[key]){
			delete _headers[key];
		}
	});
}

export const requestWatcher = new RequestWatcher();
