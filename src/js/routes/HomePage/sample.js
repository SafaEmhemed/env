// base
import React from 'react';
import { connect } from 'react-redux';
import { socketConnect } from 'socket.io-react';
import PropTypes from 'prop-types';
import { getMessage } from 'grommet/utils/Intl';
// use this to change page title properly
import { Helmet } from 'react-helmet';

// actions
import { startGetHomeData } from 'actions/HomePage/home';
import { HOME_GET_DATA_DONE } from 'actions/HomePage';

// UI components
import Button from 'grommet/components/Button';

/**
 * Home Page Component
 */
class HomePage extends React.Component{
	/**
	 * constructor
	 * @param props
	 */
	constructor(props){
		super(props);
		this._sendApiMessage = this._sendApiMessage.bind(this);
		this._sendSocketMessage = this._sendSocketMessage.bind(this);
	}

	/**
	 * componentDidMount
	 */
	componentDidMount(){
		this.props.socket.on('response', msg => {
			this.props.dispatch({ type:HOME_GET_DATA_DONE, payload:msg });
		});
	}

	/**
	 * send Message through socket
	 * @private
	 */
	_sendSocketMessage(){
		this.props.socket.emit('message', 'hello');
	}

	/**
	 * set message to server through api request
	 * @private
	 */
	_sendApiMessage(){
		this.props.dispatch(startGetHomeData());
	}

	/**
	 * render method for the component
	 * @return {XML}
	 */
	render(){
		const { intl } = this.context;
		return (
			<div>
				<Helmet>
					<title>Home Page</title>
				</Helmet>
				<h1>{this.props.homepage}</h1>
				<Button
					label={getMessage(intl, 'api_hello')}
					onClick={this._sendApiMessage}
					href='#' />
				<Button
					label={getMessage(intl, 'socket_hello')}
					onClick={this._sendSocketMessage}
					href='#' />
			</div>
		);
	}
}

HomePage.propTypes = {
	socket: PropTypes.object,
	dispatch: PropTypes.func,
	homepage: PropTypes.string
};

HomePage.contextTypes = {
	intl: PropTypes.object
};

/**
 * state mapState To props
 */
const select = state => state.get('homepage').toJS(); // Always a new object
export default socketConnect(connect(select)(HomePage));
