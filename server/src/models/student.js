/**
 * schema for 'student' collection
 * @author: Arie M. Prasetyo (2019)
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  type: {type: String, default: 'student'},
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Student', StudentSchema);