var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Group = require("../models/Groups.js");

/* GET ALL PRODUCTS */
router.get('/', function (req, res, next) {
  Group.find(function (err, groups) {
    if (err) return next(err);
    res.json(groups);
  });
});

/* GET SINGLE GROUP BY ID */
router.get('/:id', function (req, res, next) {
  Group.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE GROUP BY Groupname */
router.get('/groupname/:groupname', function (req, res, next) {
  Group.find()
    .byId(req.params.groupname)
    .exec(function(err, group) {
      if (err) return next(err);
      res.json(group);
    });
});

/* GET SINGLE GROUP BY Groupname */
router.get('/:groupname/matches', function (req, res, next) {
  Group.find()
    .byId(req.params.groupname)
    .select('matches')
    .exec(function (err, matches) {
      if (err) return next(err);
      res.json(matches);
    });
});

/* SAVE GROUP */
router.post('/', function (req, res, next) {
  Group.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE GROUP */
router.put('/:id', function (req, res, next) {
  Group.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE GROUP */
router.delete('/:id', function (req, res, next) {
  Group.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;