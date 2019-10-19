import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

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

  //* Write class methods with arrow functions so .this has lexical scope to the class
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

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
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
