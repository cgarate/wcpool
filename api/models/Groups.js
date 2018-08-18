var mongoose = require('mongoose');

let MatchSchema = new mongoose.Schema({
  name: String,
  type: String,
  home_team: String,
  away_team: String,
  home_result: String,
  away_result: String,
  date: Date,
  stadium: String,
  finished: Boolean,
  matchday: Number
});

var ObjectId = mongoose.Schema.Types.ObjectId;
let GroupSchema = new mongoose.Schema({
  _id: ObjectId,
  id: String,
  name: String,
  winner: String,
  runnerup: String,
  matches: [MatchSchema]
});

GroupSchema.query.byId = function(id) {
  return this.where({ id: id });
};

module.exports = mongoose.model('Group', GroupSchema);
