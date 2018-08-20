var mongoose = require('mongoose');

let PredictionSchema = new mongoose.Schema({
  home_result: Number,
  away_result: Number,
  game: Number
});

var ObjectId = mongoose.Schema.Types.ObjectId;
let UserSchema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  username: String,
  key: String,
  email: String,
  type: String,
  predictions: [PredictionSchema]
});

UserSchema.query.byEmail = function(email) {
  return this.where({ email: email });
};

module.exports = mongoose.model('User', UserSchema);
