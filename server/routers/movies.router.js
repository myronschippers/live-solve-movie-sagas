const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// TODO - create GET for all movies
router.get('/', (req, res) => {
  // get all movie data
  const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`;

  pool.query(queryText)
    .then((responseDb) => {
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
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