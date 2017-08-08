import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// main pages
import HomePage from 'routes/HomePage';
import NotFound from 'routes/NotFound';

/**
 * Define system routes
 */
const Routes = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/*' component={NotFound} />
		</Switch>
	</Router>
);
export default Routes;
