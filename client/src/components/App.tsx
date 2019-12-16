import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';

const Admin = () => <div>Admin</div>;
const NotFound404 = () => <div>404</div>;

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<Switch>
						<Route exact path='/admin' component={Admin} />
						<Route exact path='/' component={Main} />
						<Route component={NotFound404} />
					</Switch>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

export default App;
