// A basic HTTP server

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3001;

// logging
app.use(morgan('dev'));

// serves up files from /public - webpack is handling the rest and outputing public/bundle.js!
app.use(express.static(path.join(__dirname, 'public')));

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
