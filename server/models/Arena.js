// user model
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Arena = new Schema({
  image: String,
  arena: String,
  location: String,
  team: String,
  team-logo: String,
  capacity: Number,
  opened: Number,
  team-id: String
})

module.exports = mongoose.model('arenas', Arena)
