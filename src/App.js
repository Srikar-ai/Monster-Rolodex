import React, {Component} from 'react'
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from  './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data=>data.json())
    .then(data=>this.setState({monsters:data}))
  }
  render(){
    const {monsters,searchField}= this.state;// destructuring c
    const filtermonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        {/* <input type='search' placeholder='Search Monsters' onChange={e=>this.setState({searchField:e.target.value})}/>  */}
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={e=>this.setState({searchField:e.target.value})}
        />
        <CardList monsters={filtermonsters} />
      </div>
    );
  }
}

export default App;
