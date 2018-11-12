import "babel-polyfill";

import express from "express";
import cors from "cors";

app.use(cors());

const expressObjects = [
  express.json(),
  express.urlencoded({ extended: false }),
  morgan("combined")
];

const toUse = [...expressObjects];

toUse.forEach(object => appUse(object));

appUse("/", routes);

server.listen(process.env.PORT || 3000, () =>
  console.log(`App listening on port # ${process.env.PORT || 3000}`)
);
