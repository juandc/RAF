import React from "react";
import Express from "express";
import { renderToNodeStream } from "react-dom/server";
import { join } from "path";
import ServerSide from "./utils/html";
import { port } from "./utils/env";

const app = new Express();

app.use("/static", Express.static(join(process.cwd(), "./dist/static")));

app.use((req, res) => {
  const context = {};
  const serverProps = {
    cookie: req.header("cookie"),
    location: req.url,
    context
  };

  return context.url
    ? (res.writeHead(302, { Location: context.url }), res.end())
    : res.write(renderToNodeStream(<ServerSide {...serverProps} />).pipe(res));
});

app.listen(port, () => console.log(`Server running at localhost:${port}`)); // eslint-disable-line no-console
