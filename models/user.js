var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  bio: String,
  twitter: String,
  github: String,
  image: String,
  portfolio: String,
  projects:[{ type: mongoose.Schema.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('User', userSchema);