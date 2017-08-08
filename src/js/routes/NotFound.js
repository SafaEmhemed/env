import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

import { pageLoaded } from './utils';

/**
 * Not found component
 */
class NotFound extends Component{
	/**
	 * on mounting the component
	 */
	componentDidMount(){
		pageLoaded('Not Found');
	}
	/**
	 * render
	 */
	render(){
		return (
			<Box full align='center' justify='center'>
				<Headline strong>404</Headline>
				<Heading>Oops...</Heading>
				<Paragraph size='large' align='center'>
          It seems that you are in the wrong route. Please check your URL and
          try again.
        </Paragraph>
			</Box>
		);
	}
}

NotFound.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(NotFound);
