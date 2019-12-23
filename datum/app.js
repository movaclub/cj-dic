// simple API

'use strict';
const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(cors());

require("./api")(app);

app.listen(port, () => {
  console.info( `Server is up & running on port ${port} @ localhost` );
});
