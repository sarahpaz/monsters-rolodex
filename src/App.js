import React, { Component } from "react";
import "./App.css";

//* Class component gives access to State
class App extends Component {
  constructor() {
    super(); //* This calls the constructor method on the component class and gives access to this.state

    this.state = {
      monsters: [
        {
          name: "Frankenstein"
        },
        {
          name: "Dracula"
        },
        {
          name: "Zombie"
        }
      ]
    };
  }

  //* As soon as state changes we re-render the new component with the new state and display it
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => (
          //* Unique key is required because React needs to know which element it needs to update *
          <h1 key={index}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
