const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  occupation: {
    type: String,
  },
  catchphrase: {
      type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Celebrity', schema);