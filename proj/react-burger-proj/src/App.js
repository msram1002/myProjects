import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Person name="Max" age="28">Hello!</Person>
        <Person name="Mary" age="30">Hola!</Person>
      </div>
    );
  }
}

export default App;
