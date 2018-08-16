module.exports = function createDataHelpers(db) {
  return {

    getTeams: function(cb) {
      db.collection("teams").find().toArray((err, teams) => {
        if (err) {
          return cb(err);
        }
        cb(null, teams)
      });
    },

    getGroups: function(cb) {
      db.collection("groups").find().toArray((err, groups) => {
        if (err) {
          return cb(err);
        }
        cb(null, groups)
      });
    },

  }
}