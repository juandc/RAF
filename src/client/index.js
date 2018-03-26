import React from "react";
import { StaticRouter, Route } from "react-router";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-fetch";

const App = ({ cookie, location, context }) => (
  <ApolloProvider client={getNewClient({ cookie })}>
    <StaticRouter location={location}>
      <Route path="/" name="Home" component={Home} />
    </StaticRouter>
  </ApolloProvider>
);

function getNewClient({ cookie }) {
  return new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "http://localhost:3010",
      credentials: "same-origin",
      headers: { cookie },
      fetch
    }),
    cache: new InMemoryCache()
  });
}

const Home = () => <h1>Home!</h1>;

export default App;
