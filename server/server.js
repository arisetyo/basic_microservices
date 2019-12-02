/**
 * node js server for hexa uni problem
 * @author: Arie M. Prasetyo (2019)
 */

const mongoose = require('mongoose');
const app = require('./src/app');
const port = 3000;
const {DB_URI} = require('./src/config');

mongoose.connect(DB_URI);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
