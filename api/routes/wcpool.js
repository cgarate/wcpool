"use strict";

const express       = require('express');
const wcpoolRoutes  = express.Router();

module.exports = function(DataHelpers) {

  wcpoolRoutes.get("/", function(req, res) {
    res.json({
      "API": "WCPool",
      "Version": "1.0",
      "Date": "August 7th, 2018"
      });
  });

  wcpoolRoutes.get("/teams", function(req, res) {
    DataHelpers.getTeams((err, teams) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(teams);
      }
    });
  });

  wcpoolRoutes.get("/groups", function(req, res) {
    DataHelpers.getGroups((err, groups) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(groups);
      }
    });
  });

  return wcpoolRoutes;

}