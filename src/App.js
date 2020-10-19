import React from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container app">
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
