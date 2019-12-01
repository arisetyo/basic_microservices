/**
 * main server application
 * @author: Arie M. Prasetyo (2019)
 */
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_, res) => {
  res.json({msg: `This hexa server's API server. Format "/api/v1/<collection name>"`});
});

// export app
module.exports = app;
