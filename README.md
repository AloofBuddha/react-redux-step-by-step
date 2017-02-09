
React-Redux - Step by Step
==========================

00-basic-es5-react
------------------

> All of the 'steps' are located on individual branches, so it is easier to see changesets
> To checkout part 0, `git checkout 00-basic-es5-react`

I will try to keep things minimal, so I'm working with a bare bones file structure

***File Structure***

```
|- browser
  |- app.js (client-side root)
  |- etc. (more client side files would go here)
|
|- public    (serves CSS and index.html, other static files)
|- server.js (server-side root)
```

Looking at `server.js` you will see that our server is a basic express app.
Files in `/public`, `/browser` and `/node_modules` are all exposed through static-file serving middleware.
All routes redirect to the root, and the root simply serves up `index.html`

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
    <!-- this is the 'hook' where ReactDOM will render our root element -->
    <div id="app">
      <h1>ES5 React Demo</h1>
    </div>
    <!-- third party dependencies run first, add React & ReactDOM to global scope -->
    <script src="/react/dist/react.min.js"></script>
    <script src="/react-dom/dist/react-dom.min.js"></script>
    <!-- then we run our app, assuming access to React & ReactDOM -->
    <script src="/app.js"></script>
    <!-- additional first-party scripts would go here -->
  </body>
</html>
```

`browser/app.js` runs our ES5 React (assumes React & ReactDOM globals)

***app.js***

```js
const App = React.createElement('h1', null, 'Hello World');
// translates to <h1>Hello World</h1>

// render our root element to the DOM element with id 'app'
ReactDOM.render(App, document.getElementById('app'));
```

This example is a bit trivial, but I wanted to show a basic 'Hello World' React app without Webpack or JSX or Class syntax to see that we can use React even without all those bells and whistles!

Next up is `01-basic-es6-react`