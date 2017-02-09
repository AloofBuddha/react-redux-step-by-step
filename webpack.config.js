'use strict';

const webpack = require('webpack');

module.exports = {
  // the 'input' for webpack - it will look at this file and recursively
  // search its dependencies
  entry: './browser/app.js',
  // where webpack should place its 'output' - traditionally called 'bundle.js'
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  // this line gives us better error logging, so errors reference the line
  // in our source code, *not* in bundle.js
  devtool: 'source-map',
  module: {
    // these are our 'transformations'
    loaders: [
      {
        // will transform any .js or .jsx file
        test: /jsx?$/,
        // won't look in these folders
        exclude: /(node_modules|bower_components)/,
        // this is the tool doing the transformation - Babel
        loader: 'babel-loader',
        query: {
          // these are the two transformations we selected - ES6 and JSX!
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
