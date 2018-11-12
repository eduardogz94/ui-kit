import "babel-polyfill";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.static(__dirname));

const expressObjects = [
  express.json(),
  express.urlencoded({ extended: false }),
  morgan("combined")
];

const toUse = [...expressObjects];

const appUse = (a, b) => (b ? app.use(a, b) : app.use(a));

toUse.forEach(object => appUse(object));

app.get("/", (req, res) => {
  res.redirect("/docs/index.html");
});

app.get("/test", (req, res) => {
  res.redirect("/tests/samples.html");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`App listening on port # ${process.env.PORT || 3000}`)
);
