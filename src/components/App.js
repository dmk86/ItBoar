import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Contact from '../components/contact/Contact'
import About from '../components/about/About'
import Menu from "./menu/Menu";
import Logo from "./logo/Logo";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Post from "./post/Post"

class App extends Component {
  render() {
    return (
      <Router>
          <div className="Home">
              <Menu/>
              <Logo/>

              <div className="container">
                  <Route exact path="/" component={Main} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/about" component={About} />
                  <Route path="/post/:id" component={Post} />
              </div>

              <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
