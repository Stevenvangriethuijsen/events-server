const express = require("express");

const app = express();

const port = 4000;

app.listen(port, () =>
  console.log(
    `By the power of Greyskull, port ${port} has achieved maximum portiness!`
  )
);
