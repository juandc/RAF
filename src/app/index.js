import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './pages/routes';
import Nav from './components/Nav';

const App = () => (
  <Fragment>
    <Nav />
    <Switch>{routes.map(route => <Route key={route.name} {...route} />)}</Switch>
  </Fragment>
);

export default App;
