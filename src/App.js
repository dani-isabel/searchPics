import React from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = { images: []};

 async onSearchSubmit(term) {
  const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term},
      headers: {
        Authorization: 'Client-ID acRQlkf7NwGN0k83xrOQwr1LjSdCMSMpOhC78RCb4iA'
      }
    });
    this.setState({ images: response.data.results });
  } 
  render() {
    return (
      <div className="ui container app">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images;
      </div>
    );
  }
}

export default App;
