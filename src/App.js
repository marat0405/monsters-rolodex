
import { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [
    ],
    searhField:""
    }
   
  }
  handleChange=(e)=>{
    this.setState({searhField:e.target.value});
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=>this.setState({monsters:users}))
  }
  render(){
    const {monsters, searhField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searhField.toLowerCase()));
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monster" handleChange = {this.handleChange} />
    <CardList monsters={filteredMonsters} filter={this.state.searhField}>
    
    </CardList>
    </div>
  );
  }
}

export default App;
