import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndexPage from './container/indexPage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexPage />
      </div>
    );
  }
}

export default App;
