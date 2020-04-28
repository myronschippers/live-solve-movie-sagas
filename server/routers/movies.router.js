const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// TODO - create GET for all movies
router.get('/', (req, res) => {
  // get all movie data
});

// TODO - create GET for movie details (a single movie)
router.get('/', (req, res) => {
  // get a single movies' data
});

// TODO - create PUT for updating a single movie
router.put('/', (req, res) => {
  // update data for a single movie
});

module.exports = router;