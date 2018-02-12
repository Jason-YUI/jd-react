import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <Header/>
      </div>
    );
  }
}

export default App;
