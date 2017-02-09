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