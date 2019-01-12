const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 10
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Celebrity', schema);