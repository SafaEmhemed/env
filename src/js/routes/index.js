import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// main pages
import HomePage from 'routes/HomePage';
import Images from 'routes/Images';
import NotFound from 'routes/NotFound';

/**
 * Define system routes
 */
const Routes = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/images/:imgId' component={Images} />
			<Route path='/*' component={NotFound} />
		</Switch>
	</Router>
);
export default Routes;
