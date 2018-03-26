import React from "react";
import Express from "express";
import { renderToString } from "react-dom/server";
import App from "./client";

const { PORT: port } = process.env;
const app = new Express();

app.use((req, res) => {
  const context = {};
  const location = req.url;
  const cookie = req.header("cookie");

  const props = { context, cookie, location };
  const html = renderToString(<App {...props} />);

  return context.url
    ? (res.writeHead(302, { Location: context.url }), res.end())
    : (res.write(html), res.end());
});

app.listen(port, () => console.log(`Server running at localhost:${port}`)); // eslint-disable-line no-console
