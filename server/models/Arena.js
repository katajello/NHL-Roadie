// Arena model
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var arenaSchema = new Schema({
  image: String,
  arena: String,
  location: String,
  team: String,
  teamLogo: String,
  capacity: String,
  opened: Number,
  teamId: String
})

module.exports = mongoose.model('Arena', arenaSchema)
