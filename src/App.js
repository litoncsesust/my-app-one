import React, { Component } from 'react';
import './App.css';

// cusotm compoenent list

import Person from './Person/Person';

class App extends Component {
  render() {

    return (
      <div className="person">
        <h1>Hello</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <p>Good to see you here!</p>
        <Person name="Liton" age="32" />
      </div>

    );

    //return React.createElement('div', { className: 'person' }, React.createElement('h1', null, 'Hello!!!'), React.createElement('h2', null, 'It is '), React.createElement('p', null, 'Good to see you here!'));
  }
}

export default App;
