import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import routes from './routes';

const App = () => <Switch>{routes.map(route => <Route key={route.name} {...route} />)}</Switch>;

export default hot(module)(App);
