import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

//* Class component gives access to State
class App extends Component {
  constructor() {
    super(); //* This calls the constructor method on the component class and gives access to this.state

    this.state = {
      //* State turns into props when it gets passed down (e.g. CardList)
      monsters: [],
      searchField: ""
    };
  }

  //* Mount is when React puts our component on the page, renders it on the DOM for the first time, it calls the block of code inside*//
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users })); //* Everytime you call setState it re-renders
  }

  //* As soon as state changes we re-render the new component with the new state and display it
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(
      monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()) ||
        monster.email.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
