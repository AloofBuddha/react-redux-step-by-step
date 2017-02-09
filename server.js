// A basic HTTP server

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3001;

// logging
app.use(morgan('dev'));

// serves up files from /public, /browser, /node_modules
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'browser')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// serves up main (only) page /index.html
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// api layer could be added here if desired
// app.use('/api', require('./api'));

// for all other URL paths, redirect to /
app.get('/*', (req, res, next) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
