import React, { Component } from 'react';
import './App.css';
import Menu from "./menu/Menu";
import Logo from "./logo/Logo";
import Main from "./main/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Logo/>
        <Main/>
      </div>
    );
  }
}

export default App;
