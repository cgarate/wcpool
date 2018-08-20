var express = require('express');
var router = express.Router();
var User = require('../models/Users.js');

/* GET users listing. */
router.get('/:email', function(req, res, next) {
  User.find()
    .byEmail(req.params.email)
    .exec(function(err, user) {
      if (err) return next(err);
      res.json(user);
    });
});

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

router.get('/:id/predictions/', function(req, res, next) {
  User.findById(req.params.id, 'predictions', function (err, predictions) {
    if (err) return next(err);
    res.json(predictions);
  });
});

module.exports = router;
