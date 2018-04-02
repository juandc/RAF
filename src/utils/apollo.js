import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';

// eslint-disable-next-line react/prop-types
const ApolloContainer = ({ cookie, ...props }) => (
  <ApolloProvider client={getNewClient({ cookie })} {...props} />
);

function getNewClient({ cookie }) {
  return new ApolloClient({
    ssrMode: !!cookie,
    link: createHttpLink({
      uri: 'https://fakerql.com/graphql',
      credentials: 'same-origin',
      headers: { cookie: cookie || null },
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}

export default ApolloContainer;
