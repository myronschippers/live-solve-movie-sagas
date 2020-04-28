const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // get all movie data
  // const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`;
  const queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, array_agg("genres".name) as "genre"
    FROM "movies"
    LEFT JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
    LEFT JOIN "genres" ON "movies_genres".genres_id = "genres".id
    GROUP BY "movies".id
    ORDER BY "title" ASC;`;

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

router.put('/edit/:id', (req, res) => {
  // update data for a single movie
  const queryText = `UPDATE "movies"
    SET "title" = $1, "description" = $2
    WHERE "id" = $3;`;
  const movieId = req.params.id;
  const newMovieData = req.body;

  pool.query(queryText, [
    // how is title coming to server
    newMovieData.title,
    // how to get the description
    newMovieData.description,
    movieId
  ])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.get('/genres/:id', (req, res) => {
  // get a single movies' data
  const queryString = `SELECT "movies_genres".movies_id, "movies_genres".genres_id, "movies".title, "genres".name FROM "movies"
    JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
    JOIN "genres" ON "movies_genres".genres_id = "genres".id
    WHERE "movies".id = $1;`;
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

module.exports = router;