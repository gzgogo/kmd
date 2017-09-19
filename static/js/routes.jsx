import React from 'react';
import {
	Router,
	Route,
	browserHistory,
	IndexRoute,
	hashHistory,
	useRouterHistory,
	IndexRedirect
} from 'react-router';
// app
import App from 'pages/App';
import Index from 'pages/Index';
import Service from 'pages/Service';
import Support from 'pages/Support';
import About from 'pages/About';
import Job from 'pages/Job';
//routes
const routes = (
	<Router history={ browserHistory }>
		<Route component={App}>
			<Route path='/' component={ Index }/>
			<Route path='/service' component={ Service }/>
			<Route path='/support' component={ Support }/>
			<Route path='/about' component={ About }/>
			<Route path='/job' component={ Job }/>
		</Route>
	</Router>
);

export default routes;