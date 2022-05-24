import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list';
import { Searchbox } from './components/search-box/search-box';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFlield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  
  handleChange = e => {
    this.setState({searchFlield: e.target.value})
  }

  render() {
    const { monsters, searchFlield } =  this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFlield.toLowerCase())
      );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <Searchbox
          placeholder='Search monsters...' 
          handleChange={this.handleChange}
        />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;