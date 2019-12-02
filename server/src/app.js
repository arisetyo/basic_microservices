/**
 * main server application
 * @author: Arie M. Prasetyo (2019)
 */
const bodyParser = require("body-parser");
const express = require('express');
const Student = require('./models/student');

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

// API endpoints for student collection
app.get('/api/v1/students', async (_, res) => {
  const students = await Student.find({});
  res.json(students);
});

app.post('/api/v1/students', async (req, res) => {
  const student = new Student({
    name: req.body.name
  });

  const savedStudent = await student.save();
  res.json(savedStudent);
});

// export app
module.exports = app;
