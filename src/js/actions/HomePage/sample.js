/**
 * Created by mohn93 on 6/2/2017.
 */
import {
	HOME_GET_DATA,
	HOME_GET_DATA_FAIL,
	HOME_GET_DATA_DONE
} from './index';

/**
 * fetch data from http://localhost:4000/api/users
 *
 * @return {promise}
 */
function fetchData(){
	return fetch('http://localhost:4000/api/users');
}

/**
 * starting the get request and dispatch HOME_GET_DATA_DONE
 */
export function startGetHomeData(){
	// Invert control!
	// Return a function that accepts `dispatch` so we can dispatch later.
	// Thunk middleware knows how to turn thunk async actions into actions.

	return function(dispatch){
		dispatch({ type: HOME_GET_DATA });
		return fetchData().then(
			payload => {
				Promise.resolve(payload.text()).then(value => {
					dispatch({ type:HOME_GET_DATA_DONE, payload:value });
				});
			}

		).catch(error => dispatch({
			type: HOME_GET_DATA_FAIL,
			payload: error
		})
		);
	};
}
