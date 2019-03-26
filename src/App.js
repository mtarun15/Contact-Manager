import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding = "Contact Manager"/>
        <div className="container">
          <Contact 
            name = "Tarun Manchukonda"
            email ="xyz@gmail.com" 
            phone= "9876543201" 
          />
          <Contact 
            name = "Mounika Sharma"
            email ="ms@gmail.com" 
            phone= "9865832147" 
          />
        </div>
       </div>
    );
  }
}

export default App;
