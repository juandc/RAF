import React from 'react';
import Express from 'express';
import { renderToNodeStream } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { join } from 'path';
import ServerSide from './utils/html';
import { port } from './utils/env';

const app = new Express();

app.use('/static', Express.static(join(process.cwd(), './dist/static')));

app.use((req, res) => {
  // Context will hace values when need...
  const context = {};

  // Redirect method!
  if (context.url) {
    res.writeHead(302, { Location: context.url });
    return res.end();
  }

  // Style the application from the server:
  // https://www.styled-components.com/docs/advanced#streaming-rendering
  const sheet = new ServerStyleSheet();
  // Avoid larger return line :D
  const serverProps = {
    cookie: req.header('cookie'),
    location: req.url,
    context,
  };

  // Collect styles, and render with React 16 new methods...
  return res.write(
    sheet.interleaveWithNodeStream(renderToNodeStream(<ServerSide {...serverProps} />)).pipe(res),
  );
});

app.listen(port, () => console.log(`Server running at localhost:${port}`)); // eslint-disable-line no-console
