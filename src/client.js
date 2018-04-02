import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloContainer from './utils/apollo';
import App from './app';

const ClientSide = () => (
  <ApolloContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloContainer>
);

// hydrate wil re-use the ReactDOMServer html
// https://reactjs.org/docs/react-dom.html#hydrate
hydrate(<ClientSide />, document.getElementById('root'));
