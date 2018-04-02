import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ApolloContainer from './apollo';
import App from '../app';

// eslint-disable-next-line react/prop-types
const Html = ({ context, cookie, location }) => (
  <html lang="en">
    <head>
      <link
        type="text/plain"
        rel="stylesheet"
        href="https://raw.githubusercontent.com/sindresorhus/modern-normalize/master/modern-normalize.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>RAF</title>
    </head>
    <body>
      <div id="root">
        <ApolloContainer cookie={cookie}>
          <StaticRouter location={location} context={context}>
            <App />
          </StaticRouter>
        </ApolloContainer>
      </div>
      <script src="/static/vendor.js" />
      <script src="/static/client.js" />
    </body>
  </html>
);

export default Html;
