// base
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

// UI components
import App from 'grommet/components/App';

// local imports
import Routes from 'routes';

// import stylesheets
import 'css-base';

/**
 * Main web app
 */
class Main extends React.Component{
	componentDidMount = () => {
		document.body.classList.remove('loading');
	}
	/**
	 * render JSX
	 */
	render(){
		const { history } = this.props;
		return (
			<App centered={false}>
				<StickyContainer>
					<ConnectedRouter history={history}>
						<Routes />
					</ConnectedRouter>
				</StickyContainer>
			</App>
		);
	}
}
Main.propTypes = {
	history: PropTypes.object.isRequired
};

export default connect()(Main);
