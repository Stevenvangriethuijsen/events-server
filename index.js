const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const eventRouter = require("./event/router");

const app = express();
const middleware = cors();
const jsonParser = bodyParser.json();
app.use(middleware);
app.use(jsonParser);
app.use(eventRouter);

const port = 4000;

app.listen(port, () =>
  console.log(
    `By the power of Greyskull, port ${port} has achieved maximum portiness!`
  )
);
