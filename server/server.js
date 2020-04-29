const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const moviesRouter = require('./routers/movies.router');
const genresRouter = require('./routers/genres.router');
const authRouter = require('./routers/auth.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
// register movies router
app.use('/api/movies', moviesRouter);
app.use('/api/genres', genresRouter);
// create / register new login route
app.use('/api/auth', authRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});