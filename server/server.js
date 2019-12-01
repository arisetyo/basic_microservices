/**
 * node js server for hexa uni problem
 * @author: Arie M. Prasetyo (2019)
 */

const app = require('./src/app');
const port = 3001;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
