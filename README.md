
React-Redux - Step by Step
==========================

01-basic-es6-react
------------------

What we are looking to do here is update our app minimally so we can use ES6 and JSX when writing out React code. To accomplish this, we will be using a tool called `Webpack`. Webpack is going to allow us to take ES6 code (including ES6 modules) that contains JSX and transform it into standard ES5 code. Even better, Webpack simply needs to know about our 'root' front-end file and it will crawl through all of that files dependencies (and *that* files dependencies, recursively) and output a single JS file. This makes it simple for us to write our code using modules, and now we don't need to worry about adding our scripts in the correct order - Webpack does it all for us!

First, we add `webpack` as a dev-dependency, along with the other dependencies it works with for transforming our ES6 to ES5.

`npm install --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-react`

We'll also update out `start` script in *package.json* to invoke webpack

***package.json***

```json
{
  // ...
  "scripts": {
    "start": "webpack -w & nodemon server.js"
  }
}
```

`&` here executes two shell commands but in parallel (or, in a non-blocking manner, more specifically). The reason is because `webpack -w` will be running continually, and if we used `&&` it would block forever so `nodemon server.js` would never run. Webpack is only responsible for reading our server code and outputting a 'bundled' js file, which we expect out HTML to reference.

To make webpack actually *do* something, we need to add a config file - `webpack.config.js`

***webpack.config.js***

```js
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
```

Now we update `index.html` to reference just bundle.js

***public/index.html***

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ES5 React Demo</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/stylesheets/style.css">
  </head>
  <body>
    <div id="app">
      <h1>ES5 React Demo</h1>
    </div>
    <!-- we no longer have to serve up React & ReactDOM explicitly -->
    <!-- everything we need to run our front-end code is output to bundle.js! -->
    <script src="/bundle.js"></script>
  </body>
</html>
```

and we can update `app.js` to use ES6, JSX and Modules

***app.js***

```js
// Webpack will bundle our dependencies along with our own app logic
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>+ Webpack!</h2>      
      </div>
    );
  }
}

// render our root element to the DOM element with id 'app'
ReactDOM.render(<App />, document.getElementById('app'));
```

[Change-set](https://github.com/kaizerroll/react-redux-step-by-step/compare/00-basic-es5-react...01-basic-es6-react?diff=unified&name=01-basic-es6-react)

Next up: `02-`
