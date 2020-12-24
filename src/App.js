import React, { Component } from 'react';
import './App.css';

// cusotm compoenent list

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 26 },
      { name: 'Bale', age: 29 }
    ]
  }
  switchNameHandler = () => {
    //console.log('was clicked!');
    //this.state.persons[0].name = "Maximilions";
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 35 },
        { name: 'Bale', age: 29 }
      ]
    })
  }

  render() {
    return (
      <div className="person">
        <h1>Hello</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <p>Good to see you here!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My hobbies : Football </Person>
      </div >

    );

    //return React.createElement('div', { className: 'person' }, React.createElement('h1', null, 'Hello!!!'), React.createElement('h2', null, 'It is '), React.createElement('p', null, 'Good to see you here!'));
  }
}

export default App;
