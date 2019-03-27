import React, { Component } from 'react';
import './App.css';
import Menu from "./menu/Menu";
import Logo from "./logo/Logo";
import Main from "./main/Main";
import Footer from "./footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Logo/>
        <Main articleList={[]}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
