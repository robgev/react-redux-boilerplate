import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import store from './reducers/store';
import App from './components/App';
import Article from './components/Article';
import NotFound from './components/NotFound';

import './scss/base.scss';

const ApplicationRoot = () => (
  <Provider store={store}>
  	<Router>
  		<Switch>
  			<Route exact path='/' component={App} />
  			<Route path='/article/:id' component={Article} />
  			<Route component={NotFound} />
  		</Switch>
  	</Router>
  </Provider>
);

render(
  <ApplicationRoot />,
  document.getElementById('root')
);
