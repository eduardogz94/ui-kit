const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

app.use(morgan("combined"));

app.get("/value", (req, res) => {
  res.send({ status: 200 });
});

app.post("/post", (req, res) => {
  console.log(req.body);
  const { data1, data2 } = req.body;
  let result = +data1 + +data2;
  res.send({ result });
});

app.listen(3000, () => console.log(`App listening on port # ${3000}`));
