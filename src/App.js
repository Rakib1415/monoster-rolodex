import React from 'react';
import './App.css';
import Cardlist from './Components/Card-list/Cardlist';
import SearchBox from './Components/Search-box/SearchBox';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }
   handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox handleChange ={this.handleChange}></SearchBox>
        <Cardlist monsters ={filteredMonsters}></Cardlist>
    </div>
    )
  }
}

export default App;
