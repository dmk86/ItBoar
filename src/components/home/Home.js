import React, { Component } from 'react';
import './Home.css';
import Menu from "../menu/Menu";
import Logo from "../logo/Logo";
import Main from "../main/Main";
import Footer from "../footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Menu/>
        <Logo/>
        <Main articleList={[]}/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
