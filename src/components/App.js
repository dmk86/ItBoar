import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
          </div>
      </Router>
    );
  }
}

export default App;
