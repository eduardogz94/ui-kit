import "babel-polyfill";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import ip from "ip";

const server = express();

server.use(cors());
server.use(express.static(__dirname));

const expressObjects = [
  express.json(),
  express.urlencoded({ extended: true }),
  morgan("combined")
];

const toUse = [...expressObjects];

const appUse = (a, b) => (b ? server.use(a, b) : server.use(a));

toUse.forEach(object => appUse(object));

server.get("/", (req, res) => {
  res.redirect("/docs/egUI-KIT.html");
});

server.get("/samples", (req, res) => {
  res.redirect("/tests/samples.html");
});

server.get("/jsdoc", (req, res) => {
  res.redirect("/out/index.html");
});

server.post("/formdata", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

server.get("/request", (req, res) => {
  console.log(req.query);
  res.send({ status: 200, msg: req.query.param });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(
    `App listening on ip ${ip.address()}:${process.env.PORT || 3000}`
  );
});
