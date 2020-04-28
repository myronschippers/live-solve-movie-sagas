const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

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

router.get('/details/:id', (req, res) => {
  // get a single movies' data
  const queryString = `SELECT * FROM "movies" WHERE "id" = $1;`;
  const movieId = req.params.id;

  pool.query(queryString, [movieId])
    .then((responseDb) => {
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

// TODO - create PUT for updating a single movie
router.put('/', (req, res) => {
  // update data for a single movie
});

module.exports = router;